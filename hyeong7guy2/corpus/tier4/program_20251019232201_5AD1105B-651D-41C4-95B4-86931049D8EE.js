function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F0.constructor;
    t2(a2, a2, this, F0, F0);
}
function f7() {
    const v9 = d8.promise;
    let v10;
    try { v10 = v9.setHooks(); } catch (e) {}
    for (let i12 = 10, i13 = 10; i13; i13--) {
    }
    return v10;
}
F0.constructor = f7;
new F0();
