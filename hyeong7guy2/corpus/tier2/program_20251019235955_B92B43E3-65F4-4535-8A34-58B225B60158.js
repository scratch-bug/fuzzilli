function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                for (let v8 = 0; v8 < 5; v8++) {
                    v8 != v8;
                    for (let v10 = 0; v10 < 5; v10++) {
                    }
                    function f11(a12, a13) {
                        return f7;
                    }
                }
                return a6;
            }
            const v14 = f7();
            v14 >> v14;
            const v16 = `string${a6}undefined`;
            function f17(a18, a19, a20) {
                function F22(a24, a25, a26, a27) {
                    if (!new.target) { throw 'must be called with new'; }
                    a27--;
                    this.f = a27;
                }
                const v29 = new F22(f17, 1825, F22, 1825);
                const t25 = v29.constructor;
                const v31 = new t25(1825, a18, a18, f17);
                return v31;
            }
            f17();
            v16.normalize();
            return f5;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v36 = new F0(F0, F0);
v36.toString();
