function f0(a1, a2, a3) {
    const v7 = {
        get g() {
            return a3;
        },
        set g(a6) {
        },
    };
    function f9(a10) {
        return this;
    }
    Object.defineProperty(a2, this, { set: f9 });
    return a2;
}
new Worker(f0, { type: "function" });
gc();
