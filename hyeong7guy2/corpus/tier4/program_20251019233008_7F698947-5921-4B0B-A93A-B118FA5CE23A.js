function f1(a2, a3) {
    const v4 = a3.constructor;
    const v5 = new v4(a3, v4, v4);
    return Symbol.keyFor(v5);
}
try { f1(f1, false); } catch (e) {}
