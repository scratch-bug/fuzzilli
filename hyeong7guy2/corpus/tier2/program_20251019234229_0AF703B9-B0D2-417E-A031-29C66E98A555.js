function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v23 = {
        [v6]() {
            const v22 = {
                next() {
                    class C10 extends WeakMap {
                    }
                    class C11 {
                    }
                    const v12 = class {
                        static {
                            try {
                                super.setInt16(C11);
                            } catch(e15) {
                                for (let v16 = 0; v16 < 10; v16++) {
                                    C10 %= C10;
                                    const v17 = async (a18, a19, a20) => {
                                        await v16;
                                        return v17;
                                    };
                                }
                            }
                        }
                    }
                },
            };
            return v22;
        },
    };
    const v26 = new Int16Array();
    new Date(Symbol, Date, 882, ...v26, ...v23);
    return v26;
}
const v31 = new Worker(f0, { type: "function" });
v31.getMessage();
