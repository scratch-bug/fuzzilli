function f0(a1) {
    function F2(a4) {
        if (!new.target) { throw 'must be called with new'; }
        const v5 = this.constructor;
        let v6;
        try { v6 = new v5(); } catch (e) {}
        this.a = v6;
    }
    const v7 = new F2();
    function f8(a9) {
        return a9;
    }
    const v12 = [v7];
    const v13 = { arguments: v12, type: "function" };
    Worker(f8, v13);
    return v13;
}
try { f0(f0); } catch (e) {}
