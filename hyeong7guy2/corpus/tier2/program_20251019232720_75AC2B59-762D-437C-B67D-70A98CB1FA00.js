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
                function f13() {
                }
                try { Symbol.keyFor(); } catch (e) {}
                v12[Symbol.hasInstance] = f13;
                for (let v17 = 0; v17 < 5; v17++) {
                    C11.__proto__ = v12;
                    v12 instanceof C11;
                }
                return v2;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v19 = new F3(f0, f0);
    v19.toString(v19);
    return f0;
}
f0(f0);
