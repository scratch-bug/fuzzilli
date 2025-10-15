function f1(a2, a3) {
    return { ...a3, a: f1 };
}
f1("symbol", f1());
