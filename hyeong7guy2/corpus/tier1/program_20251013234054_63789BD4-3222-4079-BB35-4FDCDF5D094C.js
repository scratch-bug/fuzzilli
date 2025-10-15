class C0 {
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a6(a3, a3, C0, a3); } catch (e) {}
    const v8 = `
        const v9 = {};
    `;
    eval(v8);
}
new F1(F1, F1, F1, F1);
