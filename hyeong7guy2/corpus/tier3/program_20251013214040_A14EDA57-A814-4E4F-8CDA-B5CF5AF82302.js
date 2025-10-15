function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
F0 < F3;
