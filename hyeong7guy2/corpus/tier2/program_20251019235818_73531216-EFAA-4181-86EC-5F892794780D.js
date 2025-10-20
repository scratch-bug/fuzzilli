const v0 = class {
    set f(a2) {
        function F3(a5, a6) {
            if (!new.target) { throw 'must be called with new'; }
            function f7() {
                function f8(a9) {
                    try { Uint16Array.apply(f7, this); } catch (e) {}
                }
                f8(this);
                f8();
                %OptimizeMaglevOnNextCall(f8);
                return f8;
            }
            Object.defineProperty(this, "toString", { get: f7 });
        }
        const v14 = new F3(a2, F3);
        class C15 {
            static [v14](a17, a18, a19) {
            }
        }
    }
}
const v20 = new v0();
v20.f = v20;
