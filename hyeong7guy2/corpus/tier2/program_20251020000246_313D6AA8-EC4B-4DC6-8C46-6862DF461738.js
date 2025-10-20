function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = "number" == "compileStreaming";
            const v11 = !v10;
            v11 && v11;
            if (v10) {
            }
            for (let i14 = 0; i14 < 20000; i14++) {
                i14 / 2;
                function F22(a24, a25) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f26(a27, a28, a29) {
                        return a29;
                    }
                    f26(a24, F22);
                }
                i14++;
            }
            eval();
            const v35 = 1000 < 10000;
            const v36 = v35 && v35;
            v36 || v36;
            return a3;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v38 = new F1();
class C39 {
    static [v38](a41, a42, a43) {
    }
    static [v38](a45, a46, a47) {
    }
}
