const v1 = [512,9007199254740991,63841,268435441,-373334214,65536,1432145695,536870889,-1024,268435441];
const v2 = {};
v2.get = Symbol;
const v4 = new Proxy(v1, v2);
function f5() {
    function f6(a7) {
        return f5;
    }
    const v10 = [v4];
    Worker(f6, { arguments: v10, type: "function" });
    return f5;
}
class C13 extends f5 {
}
const v15 = class {
}
function f16() {
    new C13();
    return v4;
}
Object.defineProperty(v15, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f16 });
try { new Int32Array(v15); } catch (e) {}
