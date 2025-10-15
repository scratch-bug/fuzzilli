function f0() {
    return f0;
}
function f2() {
    const v3 = %WasmStruct();
    Object.defineProperty(v3, -1, { enumerable: true, get: f0, set: f0 });
    return v3;
}
function f4() {
    function f6() {
        return f2;
    }
    function f7(a8) {
        return a8;
    }
    Object.defineProperty(Date, "constructor", { get: f6, set: f7 });
    const v9 = Date.constructor;
    try { v9(f7, v9, Symbol); } catch (e) {}
    function f11() {
        return { done: true };
    }
    return { next: f11 };
}
const v15 = Symbol.iterator;
f2.bind(null, ...{ [v15]: f4 });
