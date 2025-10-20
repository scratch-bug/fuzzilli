function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                function f11() {
                    function f12(a13) {
                        WeakMap[8] = WeakMap;
                        for (let v15 = 0; v15 < 5; v15++) {
                            WeakMap[8] = 2;
                            WeakMap = [];
                        }
                        return a13;
                    }
                    %OptimizeMaglevOnNextCall(f12);
                    return f12;
                }
                Object.defineProperty(this, "toString", { get: f11 });
            }
            const v18 = new F7(f5, a6);
            class C19 {
                static [v18](a21, a22, a23) {
                }
            }
        }
        f5();
        f5();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v26 = new F0();
class C27 {
    static [v26](a29, a30, a31) {
    }
}
