class C0 {
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        Temporal.from(Temporal, F1, F1, a3);
    } catch(e9) {
        const v10 = C0.constructor;
        try { v10(e9); } catch (e) {}
    }
}
new F1();
