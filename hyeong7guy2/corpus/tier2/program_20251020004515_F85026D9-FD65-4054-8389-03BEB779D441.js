function f0(a1) {
    let v2;
    try { v2 = a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    function f13() {
                    }
                    WeakSet[Symbol.toPrimitive] = f13;
                    const v16 = class {
                        static [WeakSet](a18) {
                        }
                    }
                    return a5;
                }
                const v19 = [F3];
                for (let v20 = 0; v20 < 5; v20++) {
                    v19.forEach(f10);
                }
                function F22(a24, a25) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                for (let v26 = 0; v26 < 5; v26++) {
                    F22.e <<= 100000;
                }
                return f8;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v28 = new F3();
    v28.toString(v2, f0, v28, f0);
    return v28;
}
f0(f0);
