function f0() {
    return f0;
}
class C1 extends f0 {
}
function f2(a3, a4) {
    return Temporal.Instant.from();
}
Object.defineProperty(C1, "constructor", { configurable: true, enumerable: true, value: f2 });
const v8 = C1.constructor;
try { v8(); } catch (e) {}
