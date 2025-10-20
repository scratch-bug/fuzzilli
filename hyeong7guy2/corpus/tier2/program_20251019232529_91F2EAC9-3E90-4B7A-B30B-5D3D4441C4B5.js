class C1 extends Array {
}
const v2 = new C1();
const v4 = class {
}
function f5() {
    const v7 = Intl.DateTimeFormat;
    v7("os", { timeZone: v2 });
    return "os";
}
Object.defineProperty(v4, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
