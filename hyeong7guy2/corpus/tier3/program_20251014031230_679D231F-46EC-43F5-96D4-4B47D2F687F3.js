function f1(a2, a3) {
    const v5 = {
        ...a3,
        get c() {
            return a3;
        },
    };
    return v5;
}
f1("symbol", f1());
