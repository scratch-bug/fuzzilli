let v0 = 3691;
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    try { new F1(); } catch (e) {}
    for (let i = 0; i < 5; i++) {
        v0++ ^ 0;
    }
}
new F1(v0, v0, v0, F1);
