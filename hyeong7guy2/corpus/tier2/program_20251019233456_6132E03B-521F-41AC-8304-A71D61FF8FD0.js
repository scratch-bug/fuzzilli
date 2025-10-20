class C1 {
}
const v2 = new C1();
v2[Symbol.toStringTag] = 2.0;
function f5() {
    return C1;
}
Object.defineProperty(v2, "toString", { get: f5 });
try { Symbol.keyFor(v2); } catch (e) {}
