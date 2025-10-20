function f1(a2, a3) {
    const v5 = {
        ...a3,
        get c() {
            this.d = this;
            return f1;
        },
    };
    Object.defineProperty(v5, "b", { value: v5 });
    return v5;
}
f1("symbol", f1());
