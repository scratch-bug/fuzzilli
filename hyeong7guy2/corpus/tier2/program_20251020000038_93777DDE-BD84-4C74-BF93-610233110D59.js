function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v117 = {
        [v6]() {
            const v116 = {
                next() {
                    const v28 = [0.7214722605633591,-2.220446049250313e-16,-1000.0,-1.1279260725028858e+308,1000000000.0,-2.220446049250313e-16,-1.7976931348623157e+308];
                    v28[2147483647] = v28;
                    function f29() {
                        const v30 = { arguments: v28 };
                        const t4 = JSON.stringify;
                        t4(v30);
                    }
                    try { f29(); } catch (e) {}
                    const v54 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
                    const v96 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
                    async function f97() {
                        const v100 = await WebAssembly.compile(v54);
                        const v102 = await WebAssembly.compile(v96);
                        const t13 = WebAssembly.Instance;
                        const v104 = new t13(v100);
                        const v105 = WebAssembly.Instance;
                        const v107 = v104.exports.exp;
                        const v108 = { imp: v107 };
                        const v110 = new v105(v102, { env: v108 });
                        const t19 = v110.exports.re_exp;
                        t19();
                    }
                    for (let v114 = 0; v114 < 5; v114++) {
                        f97();
                    }
                },
            };
            return v116;
        },
    };
    const v120 = new Int16Array();
    new Date(Symbol, Date, 882, ...v120, ...v117);
}
const v125 = new Worker(f0, { type: "function" });
v125.getMessage();
