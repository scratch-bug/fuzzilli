for (let i1 = 0;
    (() => {
        const t0 = {};
        t0.toString = Symbol;
        return i1 < 25000;
    })();
    ++i1) {
    const v9 = { microsecond: i1 };
    for (let v10 = 0; v10 < 5; v10++) {
        v10 ^ i1;
    }
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    const v17 = WebAssembly.compile();
    function f18() {
        return a14;
    }
    v17.catch(f18);
}
new F12(F12, F12);
