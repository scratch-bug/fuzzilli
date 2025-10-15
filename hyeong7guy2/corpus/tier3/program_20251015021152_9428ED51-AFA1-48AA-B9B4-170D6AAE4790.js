function f2(a3, a4, a5, a6) {
    a3 **= a4;
    return -9007199254740992n;
}
try { f2(-9007199254740992n, true); } catch (e) {}
