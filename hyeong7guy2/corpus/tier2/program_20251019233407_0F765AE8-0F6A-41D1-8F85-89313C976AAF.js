function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                try { Temporal(); } catch (e) {}
            }
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v13 = new F4(f2, a3);
    class C14 {
        static [v13](a16, a17, a18) {
        }
    }
    return v13;
}
F0.then = f2;
const v19 = class extends F0 {
    constructor(a21, a22) {
        super();
        async function f23(a24, a25) {
            return await a24;
        }
        f23(a21);
    }
}
new v19(F0);
