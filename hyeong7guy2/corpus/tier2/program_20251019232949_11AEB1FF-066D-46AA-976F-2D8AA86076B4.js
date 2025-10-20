function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        a6.caller;
    }
    new F4(f2);
    return F0;
}
F0.then = f2;
const v10 = class extends F0 {
    constructor(a12, a13) {
        super();
        async function f14(a15, a16) {
            await a15;
            return F0;
        }
        f14(a12);
    }
}
new v10(F0);
