class C3 {
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
new F4();
function f11() {
    return 750;
}
f11.valueOf = f11;
class C12 extends f11 {
}
function f13() {
}
Object.defineProperty(f13, "initial", { value: C12 });
const t15 = WebAssembly.Memory;
const v16 = new t15(f13);
const v17 = {};
function f18(a19) {
}
function f20(a21) {
    v17.p1 = a21;
}
for (let i23 = 0; i23 < 20000; ++i23) {
}
try { v16.grow(); } catch (e) {}
