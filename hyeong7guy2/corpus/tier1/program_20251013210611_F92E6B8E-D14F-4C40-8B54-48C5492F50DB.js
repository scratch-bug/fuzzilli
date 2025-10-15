function hot_function(a1) {
    return a1.a[a1.p];
}
for (let i6 = 0; i6 < 10000; i6++) {
    const v15 = [1,2,3];
    hot_function({ a: v15, p: 0 });
}
try {
    const v78 = new Uint8Array([0,97,115,109,1,0,0,0,1,10,2,96,0,0,96,0,0,2,14,2,1,106,1,102,0,0,1,106,1,115,3,1,1,3,2,1,1,7,8,1,4,109,97,105,110,0,0,10,7,1,5,0,16,0,7,0,11]);
    const wasm_bytes = v78;
    const t10 = WebAssembly.Suspender;
    const v82 = new t10();
    const suspender = v82;
    const v84 = WebAssembly.Tag;
    const v85 = [];
    const v87 = new v84({ parameters: v85 });
    const suspender_tag = v87;
    let trigger_array = [42];
    const v95 = {
        a: trigger_array,
        get p() {
            trigger_array[0] = 1.1;
            return 0;
        },
    };
    const provider = v95;
    const t26 = WebAssembly.Module;
    const v98 = new t26(wasm_bytes);
    const module = v98;
    const v100 = WebAssembly.Instance;
    const v101 = () => {
        hot_function(provider);
    };
    const v103 = { f: v101, s: suspender_tag };
    const v105 = new v100(module, { j: v103 });
    const instance = v105;
    const t36 = WebAssembly.promisify(instance.exports.main);
    suspender.suspendOnReturnedPromise(t36());
} catch(e112) {
}
