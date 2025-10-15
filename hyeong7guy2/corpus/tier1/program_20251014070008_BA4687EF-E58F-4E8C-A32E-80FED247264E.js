function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
try { F0.p(F0, F0, F0, F0, F0); } catch (e) {}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    let get = 257;
}
