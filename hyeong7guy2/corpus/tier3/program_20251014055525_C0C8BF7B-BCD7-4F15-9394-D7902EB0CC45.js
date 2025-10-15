function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i10 = 0; i10 < 25000; ++i10) {
    F0 == F6;
}
