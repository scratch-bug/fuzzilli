function f0(a1) {
    const v3 = new ArrayBuffer();
    function f4() {
        return a1;
    }
    Object.defineProperty(v3, "constructor", { configurable: true, get: f4 });
    const v5 = class extends v3 {
    }
    return v3;
}
try { f0(f0); } catch (e) {}
