function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        Math.trunc(f7);
        const v14 = [-28740];
        class C15 {
        }
        function F17(a19, a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            const v23 = a22.constructor;
            try { v23(a9); } catch (e) {}
        }
        const v25 = new F17(v14, -1, C15, -9007199254740992n);
        return v25;
    }
    f7(f7, a5);
    %OptimizeFunctionOnNextCall(f7);
}
const v27 = new F3();
const t22 = v27.constructor;
const v29 = new t22();
const v30 = new F3(v29, v29);
const t25 = v30.constructor;
new t25(F0);
