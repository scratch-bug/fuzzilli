function f0(a1) {
    let v2;
    try { v2 = a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                class C11 extends Uint8ClampedArray {
                }
                const v12 = new C11();
                for (let v13 = 0; v13 < 5; v13++) {
                    C11.e = v12;
                    v12 instanceof C11;
                }
                return v2;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v15 = new F3();
    v15.toString();
    return v2;
}
f0(f0);
