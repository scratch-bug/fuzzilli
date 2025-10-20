const t0 = Intl.RelativeTimeFormat;
const v2 = new t0();
async function f3(a4, a5) {
    try { a5(); } catch (e) {}
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F7(v2);
    for (let i14 = 0, i15 = 10; i15; i15--) {
    }
    await f3;
    return a5;
}
f3(f3, f3);
%OptimizeFunctionOnNextCall(f3);
