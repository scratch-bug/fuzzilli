function f2(a3, a4, a5) {
    const v8 = Symbol.iterator;
    const v72 = {
        [v8]() {
            const v71 = {
                next() {
                    const v49 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
                    for (let i59 = (() => {
                            for (let i52 = 0, i53 = 7; i53; i53--) {
                            }
                            return 13;
                        })();
                        (() => {
                            new Uint32Array(0, 3);
                            return i59 < 25000;
                        })();
                        ++i59) {
                        ([i59,i59,i59]).push(-1.3333616592068702e+308);
                    }
                    for (let v68 = 0; v68 < 10; v68++) {
                        WebAssembly.compile(v49);
                    }
                },
            };
            return v71;
        },
    };
    const v75 = new Int16Array();
    new Date(Symbol, Date, 882, ...v75, ...v72);
    return -1.3333616592068702e+308;
}
const v80 = new Worker(f2, { type: "function" });
v80.getMessage(Worker, Worker);
