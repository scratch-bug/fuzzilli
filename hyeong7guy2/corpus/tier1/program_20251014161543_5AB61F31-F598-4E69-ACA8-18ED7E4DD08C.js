function f0(a1) {
    function F2(a4) {
        if (!new.target) { throw 'must be called with new'; }
        this.constructor;
        Object.defineProperty(this, "g", { configurable: true, enumerable: true, set: f0 });
    }
    const v6 = new F2();
    function f7(a8) {
        return v6;
    }
    const v11 = [v6];
    Worker(f7, { arguments: v11, type: "function" });
    return Worker;
}
try { f0(f0); } catch (e) {}
