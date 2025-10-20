const v2 = class {
}
function f3() {
    const v4 = {};
    function f5(a6, a7, a8) {
        return a7;
    }
    const v11 = [616786185,v4];
    const v12 = { arguments: v11, type: "function" };
    v4[145] = v12;
    Worker(f5, v12);
    return f3;
}
Object.defineProperty(v2, Symbol.iterator, { configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
