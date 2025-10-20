function f0(a1, a2, a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                for (const v12 of "0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b") {
                    const v13 = /c[\cZ]kV(?:a+)?/symi;
                    function F14(a16, a17) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    let v18 = 0;
                    while ((() => {
                            const v22 = {
                                getOwnPropertyDescriptor(a20, a21) {
                                    return a21;
                                },
                            };
                            return v18 < 10;
                        })()) {
                        const v25 = v18++;
                        function f26(a27, a28, a29, a30) {
                            const v34 = {
                                set e(a32) {
                                    v12 / a10;
                                },
                                a: v25,
                            };
                            return v34;
                        }
                        f26(f26(a10, v12, f26, a6), v25, v25, F14);
                        const v38 = (0.08490923020868912).toExponential(f9);
                        class C40 extends Float32Array {
                        }
                        const v41 = new C40();
                        function f42() {
                            return C40;
                        }
                        function f44(a45) {
                            return v38;
                        }
                        Object.defineProperty(v41, Symbol, { writable: true, configurable: true, enumerable: true, value: f42 });
                        const v47 = [v12];
                        Reflect.apply(("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").charCodeAt, "0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b", v47);
                    }
                    return v13;
                }
                return f8;
            }
            f9(f9(a3));
            return a2;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v52 = new F4(f0, a1);
    class C53 {
        static [v52](a55, a56, a57) {
        }
    }
    return F4;
}
const v61 = new Worker(f0, { type: "function" });
v61.getMessage();
