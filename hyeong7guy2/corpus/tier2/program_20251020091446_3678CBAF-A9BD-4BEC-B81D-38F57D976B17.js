function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a4(F1); } catch (e) {}
    function f6(a7) {
        let v8;
        try { v8 = a7.call(); } catch (e) {}
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            function f13() {
                function f14(a15) {
                    function f17(a18) {
                        function f19() {
                            for (let v20 = 0; v20 < 5; v20++) {
                                function f21(a22, a23) {
                                    return 6;
                                }
                            }
                            return v8;
                        }
                        const v24 = f19();
                        Array(6, v24 >> v24, v24);
                        return a7;
                    }
                    return f17(f14);
                }
                %OptimizeMaglevOnNextCall(f6);
                return f14;
            }
            Object.defineProperty(this, "toString", { get: f13 });
        }
        const v28 = new F9(v8, a7);
        return v28.toString();
    }
    f6(f6);
}
new F1(F1, F1);
