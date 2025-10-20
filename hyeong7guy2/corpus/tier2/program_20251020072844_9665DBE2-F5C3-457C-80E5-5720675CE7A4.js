function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    let v5;
    try { v5 = new a4(); } catch (e) {}
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
                                v20 && v20;
                                function f22(a23, a24) {
                                    return v20;
                                }
                            }
                            return v8;
                        }
                        const v25 = f19();
                        Array(6, v25 >> v25, v25);
                        return a12;
                    }
                    f17(a11);
                    return a15;
                }
                %OptimizeMaglevOnNextCall(f14);
                return f14;
            }
            Object.defineProperty(this, "toString", { get: f13 });
        }
        const v29 = new F9(Array, v5);
        v29.toString();
    }
    f6(f6);
}
new F1(F1, F1);
