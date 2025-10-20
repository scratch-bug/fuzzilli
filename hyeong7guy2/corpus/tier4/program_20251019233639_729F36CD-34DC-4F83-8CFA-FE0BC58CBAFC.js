class C0 {
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        const t5 = WebAssembly.Module;
        t5(a5);
    } catch(e10) {
        const v11 = C0.constructor;
        try { v11(e10); } catch (e) {}
    }
}
new F1(C0, F1, C0, F1);
