class C0 {
    constructor() {
        function F2(a4, a5) {
            if (!new.target) { throw 'must be called with new'; }
            function f6() {
                function f7(a8) {
                    const v9 = !this;
                    return v9 && v9;
                }
                f7();
                f7(F2);
                %OptimizeMaglevOnNextCall(f7);
                return f7;
            }
            Object.defineProperty(this, "toString", { get: f6 });
        }
        const v13 = new F2(this, C0);
        class C14 {
            static [v13](a16, a17, a18) {
            }
        }
    }
}
new C0();
