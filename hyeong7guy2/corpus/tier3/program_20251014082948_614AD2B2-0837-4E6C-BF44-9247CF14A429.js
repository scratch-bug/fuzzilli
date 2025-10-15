function f0(a1, a2, a3) {
    for (let i5 = 1000;
        (() => {
            const v29 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,i5,1000,109,1,102,0,0]);
            const t1 = WebAssembly.Module;
            new t1(v29);
            return 20000;
        })();
        ) {
    }
    return f0;
}
const v39 = new Worker(f0, { type: "function" });
v39.getMessage();
