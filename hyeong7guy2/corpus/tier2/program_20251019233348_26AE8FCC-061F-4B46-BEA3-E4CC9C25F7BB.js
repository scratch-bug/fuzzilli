function f0(a1) {
    try { a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    const v13 = class {
                        static [WeakSet](a15) {
                        }
                    }
                    return a11;
                }
                const v16 = [F3];
                for (let v17 = 0; v17 < 5; v17++) {
                    v16.forEach(f10);
                }
                function F19(a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                for (let v23 = 0; v23 < 5; v23++) {
                    F19.e <<= 100000;
                }
                return f8;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v25 = new F3();
    v25.toString();
    return a1;
}
f0(f0);
