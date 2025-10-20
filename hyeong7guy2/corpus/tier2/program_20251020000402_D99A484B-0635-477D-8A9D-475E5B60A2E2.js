function f2(a3, a4, a5) {
    const v8 = Symbol.iterator;
    const v80 = {
        [v8]() {
            const v79 = {
                next() {
                    const v21 = {
                        [Symbol]() {
                            const v20 = {
                                next() {
                                    for (let v17 = 0; v17 < 5; v17++) {
                                        let v19 = ++v17;
                                        v19 *= 20000;
                                    }
                                    return this;
                                },
                            };
                        },
                    };
                    const v56 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
                    for (let i67 = (() => {
                            for (let i60 = 0, i61 = 10; i61; i61--) {
                            }
                            return 13;
                        })();
                        (() => {
                            new Uint32Array();
                            return i67 < 25000;
                        })();
                        ++i67) {
                        ([i67,i67]).push(-1.3333616592068702e+308);
                    }
                    for (let v76 = 0; v76 < 10; v76++) {
                        WebAssembly.compile(v56);
                    }
                    return 0;
                },
            };
            return v79;
        },
    };
    const v83 = new Int16Array();
    new Date(Symbol, Date, 882, ...v83, ...v80);
    return Uint32Array;
}
const v88 = new Worker(f2, { type: "function" });
v88.getMessage();
