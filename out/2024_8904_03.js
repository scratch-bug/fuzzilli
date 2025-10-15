const wasm_code = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 1, 111, 0, 2, 9, 1, 1, 105, 1, 102, 0, 0, 3, 2, 1, 0, 7, 8, 1, 4, 109, 97, 105, 110, 0, 0, 10, 9, 1, 7, 0, 32, 0, 16, 0, 11]);

function hot_func(arr) {
    arr[0];
    [...arr];
    return arr[1];
}

const imports = {
    i: {
        f: hot_func
    }
};
const module = new WebAssembly.Module(wasm_code);
const instance = new WebAssembly.Instance(module, imports);
const wasm_main = instance.exports.main;

const jspi_main = new WebAssembly.Function({
    parameters: ["externref"],
    results: ["anyref"]
}, wasm_main, {
    promising: "first"
});

for (let i = 0; i < 200; i++) {
    jspi_main([1.1, 2.2]);
}

let real_array = [1.1, 2.2, 3.3];
const handler = {
    get(target, prop, receiver) {
        if (prop === Symbol.iterator) {
            real_array[0] = {};
        }
        return Reflect.get(target, prop, receiver);
    }
};
const proxy = new Proxy(real_array, handler);

jspi_main(proxy);