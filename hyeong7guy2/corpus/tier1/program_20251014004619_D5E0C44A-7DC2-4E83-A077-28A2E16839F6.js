function f0(a1) {
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    ~a4;
    try { new this(); } catch (e) {}
}
new F2(f0);
new F2();
