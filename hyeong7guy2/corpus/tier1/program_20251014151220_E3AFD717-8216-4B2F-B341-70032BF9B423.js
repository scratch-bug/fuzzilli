function f1(a2) {
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
        const t3 = ("object").constructor;
        const v7 = new t3();
        this.a = v7;
    }
    const v8 = new F3(F3);
    function f9(a10) {
        return a2;
    }
    const v13 = [v8];
    Worker(f9, { arguments: v13, type: "function" });
    return a2;
}
try { f1(f1); } catch (e) {}
