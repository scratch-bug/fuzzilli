const v0 = [];
function f1() {
    return v0;
}
class C2 extends f1 {
}
const v3 = new C2();
function f4(a5, a6, a7) {
    let v8 = 0;
    for (let i = 0; i < 5; i++) {
        Object.defineProperty(v3, 1470975313, { value: v8 });
        v8++;
    }
    return a6;
}
try { f4(v0, f4, C2); } catch (e) {}
