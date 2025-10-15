-53081n in Map;
function f3(a4) {
}
class C5 extends f3 {
}
const v8 = class {
}
function f9() {
    for (let i10 = 3; i10 < 25000; i10++) {
        eval();
    }
    return C5;
}
Object.defineProperty(v8, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f9 });
try { new Int32Array(v8); } catch (e) {}
