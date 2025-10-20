function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v111 = {
        [v6]() {
            const v110 = {
                next() {
                    const v47 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
                    const v89 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
                    async function f90() {
                        const v93 = await WebAssembly.compile(v47);
                        const v94 = WebAssembly.compile(v89);
                        const v95 = await v94;
                        const t5 = WebAssembly.Instance;
                        const v97 = new t5(v93);
                        const v98 = WebAssembly.Instance;
                        const v100 = v97.exports.exp;
                        const v101 = { imp: v100 };
                        const v103 = new v98(v95, { env: v101 });
                        const v106 = WebAssembly.promising(v103.exports.re_exp);
                        return v106(v106, v94, 1);
                    }
                    for (let v108 = 0; v108 < 10; v108++) {
                        f90();
                    }
                },
            };
            return v110;
        },
    };
    const v114 = new Int16Array();
    new Date(Symbol, Date, 882, ...v114, ...v111);
    return f0;
}
const v119 = new Worker(f0, { type: "function" });
v119.getMessage();
