let trigger = false;

const buf = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 2, 8, 1, 1, 109, 1, 102, 0, 0, 7, 6, 1, 1, 102, 0, 0]);
const module = new WebAssembly.Module(buf);

function vuln(do_freeze) {
    const instance = new WebAssembly.Instance(module, { m: { f: () => { } } });
    const func = instance.exports.f;
    if (do_freeze) {
        Object.freeze(func);
    }
    return func;
}

for (let i = 0; i < 25000; i++) {
    vuln(false);
}

vuln(true);