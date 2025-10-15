const wasm_code = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x07, 0x01, 0x60,
    0x00, 0x01, 0x7b, 0x02, 0x09, 0x01, 0x01, 0x6d, 0x01, 0x66, 0x00, 0x00,
    0x03, 0x02, 0x01, 0x00, 0x07, 0x08, 0x01, 0x04, 0x6d, 0x61, 0x69, 0x6e,
    0x00, 0x01, 0x0a, 0x07, 0x01, 0x05, 0x00, 0x10, 0x00, 0x0b
]);

let trigger_side_effect = false;
let array = [1, 2, 3];

function optimized_func(a) {
    return a[0];
}

async function f() {
    optimized_func(array);

    if (trigger_side_effect) {
        Promise.resolve().then(() => {
            array[0] = 1.1;
        });
    }

    await new Promise(r => r());

    optimized_func(array);
}

async function run() {
    const module = await WebAssembly.compile(wasm_code);
    const instance = await WebAssembly.instantiate(module, { m: { f } });
    const wasm_main = instance.exports.main;

    for (let i = 0; i < 25000; i++) {
        await wasm_main();
    }

    trigger_side_effect = true;
    array = [1, 2, 3];
    await wasm_main();
}

run();