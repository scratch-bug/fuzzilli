const v3 = class {
}
function f4() {
    function f5() {
        return Int32Array;
    }
    const v7 = { type: "string" };
    Worker(f5, v7);
    return v7;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
