function f1(a2, a3, a4) {
    a2 **= 4294967297n;
    return f1;
}
try { f1(); } catch (e) {}
