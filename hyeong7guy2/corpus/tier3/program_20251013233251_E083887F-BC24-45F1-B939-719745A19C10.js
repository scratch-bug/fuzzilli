function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
try { F0.forEach(F0, F0, F0); } catch (e) {}
function* f7(a8, a9, a10) {
    yield (yield a8);
    return a8;
}
