function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f11() {
                function f12(a13) {
                    Array.prototype.forEach(f12);
                }
                f12();
                f12();
                %OptimizeMaglevOnNextCall(f12);
                return f12;
            }
            Object.defineProperty(this, "toString", { get: f11 });
        }
        const v19 = new F7(F0, F0);
        class C20 {
            static [v19](a22, a23, a24) {
            }
        }
        super();
    }
}
new v3(v3, v3);
