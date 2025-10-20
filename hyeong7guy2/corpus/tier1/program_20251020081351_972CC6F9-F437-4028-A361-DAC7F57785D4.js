function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let i9 = 0, i10 = 10;
                i10;
                (() => {
                    function F13(a15, a16) {
                        if (!new.target) { throw 'must be called with new'; }
                        const v17 = [268435439,-9223372036854775807,-1953415435,10000,-268435456,-65537,-128,-1525227024];
                        function F18(a20, a21) {
                            if (!new.target) { throw 'must be called with new'; }
                            function f22() {
                                function f23(a24) {
                                    let v25 = -1098098658;
                                    function F29(a31, a32) {
                                        if (!new.target) { throw 'must be called with new'; }
                                        a32++;
                                        this.e = a32;
                                    }
                                    try { F29(); } catch (e) {}
                                    const v35 = new F29("2147483647");
                                    v35.e;
                                    v35.b = v17;
                                    new F29();
                                    let v38 = arguments;
                                    ({"b":v38,"e":v25,...Int32Array} = v35);
                                }
                                %OptimizeMaglevOnNextCall(f23);
                                return f23;
                            }
                            Object.defineProperty(this, "toString", { get: f22 });
                        }
                        const v39 = new F18();
                        class C40 {
                            static [v39](a42, a43, a44) {
                            }
                        }
                    }
                    new F13();
                    i10--;
                })()) {
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v49 = new F0();
class C50 {
    static [v49](a52, a53, a54) {
    }
}
