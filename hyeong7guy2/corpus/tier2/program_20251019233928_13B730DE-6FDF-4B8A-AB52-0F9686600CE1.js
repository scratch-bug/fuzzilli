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
                                    let v24 = -1098098658;
                                    function F26(a28, a29) {
                                        if (!new.target) { throw 'must be called with new'; }
                                        this.e = f5;
                                        this.e = a29;
                                    }
                                    const v30 = new F26(a20, this);
                                    v30.e;
                                    new F26();
                                    let v33 = arguments;
                                    ({"b":v33,"e":v24,...Int32Array} = v30);
                                }
                                %OptimizeMaglevOnNextCall(f22);
                                return f22;
                            }
                            Object.defineProperty(this, "toString", { get: f21 });
                        }
                        const v34 = new F17(a15, a6);
                        class C35 {
                            static [v34](a37, a38, a39) {
                            }
                        }
                    }
                    new F13(F0, a6);
                    i10--;
                })()) {
            }
            return a6;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v44 = new F0(F0, F0);
class C45 {
    static [v44](a47, a48, a49) {
    }
}
