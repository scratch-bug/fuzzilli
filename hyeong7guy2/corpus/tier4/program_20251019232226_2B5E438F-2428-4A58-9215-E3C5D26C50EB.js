function f1(a2, a3) {
    const v5 = {
        ...a3,
        get c() {
            this.d = this;
            return a3;
        },
    };
    v5.b = v5;
    return v5;
}
f1("symbol", f1());
