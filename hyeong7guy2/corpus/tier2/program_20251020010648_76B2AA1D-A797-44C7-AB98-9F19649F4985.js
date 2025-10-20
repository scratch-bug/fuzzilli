function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super(Int8Array);
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f12() {
                function f13(a14) {
                    const v16 = d8.debugger;
                    const v17 = v16.disable();
                    const t11 = v16.enable;
                    t11();
                    return v17;
                }
                return f13;
            }
            Object.defineProperty(this, "toString", { get: f12 });
        }
        const v20 = new F8();
        class C21 {
            static [v20](a23, a24, a25) {
            }
        }
    }
}
new v4();
