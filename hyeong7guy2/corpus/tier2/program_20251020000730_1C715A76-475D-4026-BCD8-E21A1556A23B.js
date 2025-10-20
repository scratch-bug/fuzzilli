function f0() {
    function f1(a2, a3) {
        return f1;
    }
    function f7(a8) {
        return f7;
    }
    Object.defineProperty(this, 6, { set: f7 });
    const v9 = [this];
    Worker(f1, { type: "function", arguments: v9 });
    return f0;
}
try { f0(); } catch (e) {}
