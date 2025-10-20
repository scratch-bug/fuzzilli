class C1 {
}
class C2 extends C1 {
    static {
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            function f8() {
                function f9(a10) {
                    return Array.isArray(4);
                }
                f9(f9);
                f9();
                %OptimizeMaglevOnNextCall(f9);
                return f9;
            }
            Object.defineProperty(this, "toString", { get: f8 });
        }
        const v15 = new F4(F4, C2);
        class C16 {
            static [v15](a18, a19, a20) {
            }
        }
    }
}
