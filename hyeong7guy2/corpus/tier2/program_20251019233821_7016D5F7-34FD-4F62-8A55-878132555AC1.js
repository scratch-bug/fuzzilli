class C0 {
}
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a4;
    this.a = C0;
}
const v9 = new Float32Array(13);
const v12 = class {
}
function f13() {
    const v14 = [];
    for (let i15 = 3; i15 < 25000; i15++) {
        new F1(v14, v9[4]);
        function f23() {
            return v14;
        }
    }
}
Object.defineProperty(v12, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f13 });
try { new Int32Array(v12); } catch (e) {}
