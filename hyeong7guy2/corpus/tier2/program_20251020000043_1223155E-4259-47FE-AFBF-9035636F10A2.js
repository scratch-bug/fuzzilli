function f0(a1) {
    let v2;
    try { v2 = a1.call(f0); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                class C11 extends Uint8ClampedArray {
                }
                const v12 = new C11();
                for (let v13 = 0; v13 < 5; v13++) {
                    C11.__proto__ = v12;
                    v12 instanceof C11;
                }
                return a1;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v15 = new F3(f0, v2);
    return v15.toString();
}
f0(f0);
