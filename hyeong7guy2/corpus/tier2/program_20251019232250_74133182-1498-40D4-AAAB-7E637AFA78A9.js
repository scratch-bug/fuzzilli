function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7();
            Object.defineProperty(v11.constructor, 1378, { writable: true, configurable: true, enumerable: true, value: a6 });
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                function f17() {
                    function f18(a19) {
                        for (let v21 = 0; v21 < 5; v21++) {
                            WeakMap[8] = 2;
                            WeakMap = [];
                        }
                    }
                    %OptimizeMaglevOnNextCall(f18);
                    return f18;
                }
                Object.defineProperty(this, "toString", { get: f17 });
            }
            const v24 = new F13();
            class C25 {
                static [v24](a27, a28, a29) {
                }
            }
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v32 = new F0();
class C33 {
    static [v32](a35, a36, a37) {
    }
}
