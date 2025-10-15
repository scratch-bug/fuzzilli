function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 {
}
C3.d = F0;
for (let i6 = 0; i6 < 20000; ++i6) {
    C3.d *= 1.1356230574660949e+308;
}
