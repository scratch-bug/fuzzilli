function f0(a1) {
    function F2(a4) {
        if (!new.target) { throw 'must be called with new'; }
        const t3 = this.hasOwnProperty().constructor;
        const v7 = new t3();
        this.a = v7;
    }
    const v8 = new F2(a1);
    function f9(a10) {
        return f0;
    }
    const v13 = [v8];
    Worker(f9, { arguments: v13, type: "function" });
    return f0;
}
try { f0(f0); } catch (e) {}
