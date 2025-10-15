function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4(a5, a6) {
    const t4 = Intl.Segmenter;
    new t4();
}
F1[Symbol] = f4;
class C11 extends F1 {
}
new Date(Date, -1000000000000.0, -1000000000000.0, 3, C11);
const v17 = Array();
Object.defineProperty(v17, 103, { configurable: true, value: 2147483647 });
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    v17["shift"]();
}
new F18();
function f27() {
}
WebAssembly.instantiateStreaming().catch(f27);
gc();
