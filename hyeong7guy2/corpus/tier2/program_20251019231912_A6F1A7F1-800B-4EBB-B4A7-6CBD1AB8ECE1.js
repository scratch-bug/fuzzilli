const v0 = class {
    set f(a2) {
        function F3(a5, a6) {
            if (!new.target) { throw 'must be called with new'; }
            function f7() {
                function f8(a9) {
                    Uint16Array[0] = Uint16Array;
                }
                f8();
                f8(a6);
                %OptimizeMaglevOnNextCall(f8);
                return f8;
            }
            Object.defineProperty(this, "toString", { get: f7 });
        }
        const v13 = new F3();
        class C14 {
            static [v13](a16, a17, a18) {
            }
        }
    }
}
const v19 = new v0();
v19.f = v19;
