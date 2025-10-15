const v2 = new Int16Array(4096);
function f3(a4, a5) {
    Object.defineProperty(v2, 16, { configurable: true, get: f3, set: f3 });
    return v2;
}
try { f3(v2, Int16Array); } catch (e) {}
