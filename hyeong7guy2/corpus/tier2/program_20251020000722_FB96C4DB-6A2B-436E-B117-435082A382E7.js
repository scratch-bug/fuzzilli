function f1(a2) {
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
        this.__defineGetter__(Int8Array, Int8Array);
    }
    const v7 = new F3();
    function f8(a9) {
        return a9;
    }
    const v12 = [v7];
    Worker(f8, { arguments: v12, type: "function" });
    return Worker;
}
try { f1(); } catch (e) {}
