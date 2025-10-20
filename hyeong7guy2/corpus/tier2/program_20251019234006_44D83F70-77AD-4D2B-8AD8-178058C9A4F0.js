function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
F2.localeMatcher = "number";
class C5 extends F2 {
}
const v7 = class {
}
function f8() {
    return Intl.DateTimeFormat.supportedLocalesOf("os", C5);
}
Object.defineProperty(v7, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f8 });
try { new Int32Array(v7); } catch (e) {}
