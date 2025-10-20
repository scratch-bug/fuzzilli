function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F0.constructor;
    t2();
}
function f7() {
    const v9 = d8.log;
    let v10;
    try { v10 = v9.getAndStop(f7, v9); } catch (e) {}
    return v10;
}
F0.constructor = f7;
new F0(f7, f7, F0);
