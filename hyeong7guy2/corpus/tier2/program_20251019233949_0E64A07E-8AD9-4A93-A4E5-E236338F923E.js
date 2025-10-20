function f1(a2) {
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v6 = ("object").constructor;
        const v7 = new v6(v6, F3);
        v7.toString = f1;
        this.a = v7;
    }
    const v8 = new F3();
    function f9(a10) {
        return F3;
    }
    try {
    const t0 = "function";
    t0();
    } catch (e) {}
    const v14 = [v8];
    Worker(f9, { arguments: v14, type: "function" });
    return a2;
}
try { f1(); } catch (e) {}
