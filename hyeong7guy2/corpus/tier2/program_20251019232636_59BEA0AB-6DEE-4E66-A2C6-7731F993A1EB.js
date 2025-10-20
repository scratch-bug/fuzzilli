function f0() {
    function f1(a2, a3) {
        return f0;
    }
    const v7 = [this];
    v7[3019154684] = this;
    const v8 = { type: "function", arguments: v7 };
    this[6] = this;
    return Worker(f1, v8);
}
try { f0(); } catch (e) {}
