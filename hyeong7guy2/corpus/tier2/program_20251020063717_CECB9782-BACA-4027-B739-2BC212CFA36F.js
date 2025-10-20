function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let i9 = 0, i10 = 10;
                i10;
                (() => {
                    function F13(a15, a16) {
                        if (!new.target) { throw 'must be called with new'; }
                        function F17(a19, a20) {
                            if (!new.target) { throw 'must be called with new'; }
                            function f21() {
                                function f22(a23) {
                                    function f25(a26, a27, a28, a29) {
                                        return F13;
                                    }
                                    const v32 = new Proxy(Int8Array, { ownKeys: f25 });
                                    function f33(a34, a35, a36, a37) {
                                        let {...v38} = v32;
                                        return a15;
                                    }
                                    try { f33(); } catch (e) {}
                                    let v40 = -1098098658;
                                    function F42(a44, a45) {
                                        if (!new.target) { throw 'must be called with new'; }
                                        this.e = f5;
                                        this.e = a45;
                                    }
                                    const v46 = new F42();
                                    const v47 = v46.e;
                                    new F42();
                                    let v49 = arguments;
                                    ({"b":v49,"e":v40,...Int32Array} = v46);
                                    return v47;
                                }
                                %OptimizeMaglevOnNextCall(f22);
                                return f22;
                            }
                            Object.defineProperty(this, "toString", { get: f21 });
                        }
                        const v50 = new F17();
                        class C51 {
                            static [v50](a53, a54, a55) {
                            }
                        }
                    }
                    new F13(a6, f5);
                    i10--;
                })()) {
            }
            return a3;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v60 = new F0();
class C61 {
    static [v60](a63, a64, a65) {
    }
}
