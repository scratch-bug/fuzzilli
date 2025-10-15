function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3) {
}
Object.defineProperty(F0, Symbol, { configurable: true, enumerable: true, value: f2 });
for (let i6 = 0; i6 < 20000; i6++) {
}
class C12 {
}
try { new C12(F0, ...F0); } catch (e) {}
