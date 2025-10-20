function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v51 = {
        [v6]() {
            const v50 = {
                next() {
                    const v47 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
                    WebAssembly.compile(v47);
                },
            };
            return v50;
        },
    };
    const v54 = new Int16Array();
    new Date(Symbol, Date, 882, ...v54, ...v51);
    return f0;
}
const v58 = { type: "function" };
v58.flushDenormals = v58;
const v59 = new Worker(f0, v58);
v59.getMessage(Worker, v59, "function", "function");
