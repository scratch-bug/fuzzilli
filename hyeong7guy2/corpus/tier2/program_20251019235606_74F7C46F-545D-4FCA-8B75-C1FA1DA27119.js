function f0() {
    return f0;
}
class C1 extends f0 {
}
const v3 = class {
}
function f4() {
    const v8 = { execution: "async", type: "minor" };
    function f9() {
        return v3;
    }
    function f10(a11) {
        return a11;
    }
    Object.defineProperty(v8, "flavor", { configurable: true, get: f9, set: f10 });
    gc(v8);
    const v14 = Symbol.dispose;
    const v17 = {
        [v14]() {
            f4();
        },
    };
    using v18 = v17;
    return v3;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
