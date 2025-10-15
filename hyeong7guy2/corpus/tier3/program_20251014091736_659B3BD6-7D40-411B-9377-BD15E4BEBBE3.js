class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        try { a6.call(); } catch (e) {}
        Number.isNaN(Math.trunc(f5));
        const v15 = [-28740];
        class C16 {
        }
        let v17 = -9007199254740992n;
        v17++;
        function F19(a21, a22, a23, a24) {
            if (!new.target) { throw 'must be called with new'; }
            const v25 = a24.constructor;
            try { v25(a7); } catch (e) {}
        }
        new F19(v15, -1, C16, v17);
    }
    f5(f5, a3);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
const v30 = new F1();
const t24 = v30.constructor;
new t24(F1);
