function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v110 = {
        [v6]() {
            const v109 = {
                next() {
                    const v47 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
                    const v89 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
                    async function f90() {
                        const v93 = await WebAssembly.compile(v47);
                        const v95 = await WebAssembly.compile(v89);
                        const t5 = WebAssembly.Instance;
                        const v97 = new t5(v93);
                        const v98 = WebAssembly.Instance;
                        const v100 = v97.exports.exp;
                        const v101 = { imp: v100 };
                        const v103 = new v98(v95, { env: v101 });
                        const t11 = v103.exports.re_exp;
                        t11();
                    }
                    for (let v107 = 0; v107 < 5; v107++) {
                        f90();
                    }
                },
            };
            return v109;
        },
    };
    const v113 = new Int16Array();
    new Date(Symbol, Date, 882, ...v113, ...v110);
}
const v118 = new Worker(f0, { type: "function" });
v118.getMessage();
