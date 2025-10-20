function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v15 = {
        [v6]() {
            const v14 = {
                next() {
                    class C10 extends WeakMap {
                    }
                    const v11 = class {
                        static {
                            for (let v13 = 0; v13 < 10; v13++) {
                                a3 %= C10;
                            }
                        }
                    }
                },
            };
            return v14;
        },
    };
    const v18 = new Int16Array(v15, a1, 882);
    new Date(Symbol, Date, 882, ...v18, ...v15);
    return v18;
}
const v23 = new Worker(f0, { type: "function" });
v23.getMessage();
