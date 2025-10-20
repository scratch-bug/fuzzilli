function f0() {
    function f1(a2, a3) {
        function f4(a5, a6, a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                const v14 = `
                    function F16(a18, a19) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f20() {
                            function F21(a23, a24) {
                                if (!new.target) { throw 'must be called with new'; }
                            }
                            const v27 = Symbol.iterator;
                            const v32 = {
                                [v27]() {
                                    const v30 = {
                                        next() {
                                            return WeakSet;
                                        },
                                    };
                                    for (let v31 = 0; v31 < 5; v31++) {
                                    }
                                },
                            };
                            const v35 = new Int16Array();
                            new Date(WeakSet, Date, 882, ...v35, ...v32);
                            return a3;
                        }
                        Object.defineProperty(this, "toString", { get: f20 });
                    }
                    const v37 = new F16();
                    class C38 {
                        static [v37](a40, a41, a42) {
                        }
                    }
                `;
                eval(v14);
            }
            new F8();
            return a5;
        }
        new Worker(f4, { type: "function" });
        return Worker;
    }
    f1();
    f1();
    return f0;
}
({ construct: f0 }).construct();
