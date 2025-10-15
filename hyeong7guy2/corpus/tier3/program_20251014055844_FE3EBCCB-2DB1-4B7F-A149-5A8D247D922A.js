function f0() {
}
f0.toString = f0;
function f1() {
    return f0;
}
class C2 extends f1 {
}
const v3 = new C2();
class C4 {
}
const v5 = class extends C4 {
    [v3](a7, a8) {
        Temporal.Instant.from(a8);
    }
}
const v12 = new v5();
try { v12.undefined(v3, v12); } catch (e) {}
