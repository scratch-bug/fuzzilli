function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                function f11() {
                    function f12(a13) {
                        const v14 = [a3];
                        function F15(a17, a18) {
                            if (!new.target) { throw 'must be called with new'; }
                            function f19() {
                                function f20(a21) {
                                    const t13 = v14.constructor;
                                    const v23 = t13();
                                    v23.values(F15, a21, v23, a13).next(F0, a17, f12);
                                    return a17;
                                }
                                return f20;
                            }
                            Object.defineProperty(this, "toString", { get: f19 });
                        }
                        const v26 = new F15();
                        return v26.toString(a9, v26, f5, F7);
                    }
                    f12(f5);
                    %OptimizeMaglevOnNextCall(f12);
                    return f12;
                }
                Object.defineProperty(this, "toString", { get: f11 });
            }
            const v29 = new F7();
            class C30 {
                static [v29](a32, a33, a34) {
                }
            }
        }
        f5();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v36 = new F0(F0, F0);
class C37 {
    static [v36](a39, a40, a41) {
    }
    static [v36](a43, a44, a45) {
    }
}
