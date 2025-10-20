function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f11() {
                const v13 = eval();
                function f14(a15) {
                    const v17 = d8.debugger;
                    v17.disable(a10, f14, v17, F7, this);
                    const v19 = v17.enable;
                    v19(v19, v13, v19);
                }
                return f14;
            }
            Object.defineProperty(this, "toString", { get: f11 });
        }
        const v21 = new F7(this, F0);
        class C22 {
            static [v21](a24, a25, a26) {
            }
        }
    }
}
new v3();
