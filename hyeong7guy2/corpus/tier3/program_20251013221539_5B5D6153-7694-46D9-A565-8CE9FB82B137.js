const v2 = Symbol();
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new Date();
    try { v10.setFullYear(-3, v2); } catch (e) {}
}
new F3();
