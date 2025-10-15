function f2(a3, a4, a5, a6) {
    a3 **= Symbol;
    return f2;
}
try { f2(22109n); } catch (e) {}
