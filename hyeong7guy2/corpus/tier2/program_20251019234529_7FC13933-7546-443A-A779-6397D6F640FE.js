function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 512;
}
class C3 extends F0 {
}
const v4 = new C3();
const v5 = v4.a;
const v8 = new Float64Array(140);
v8[24] = v5;
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = this.constructor;
    try { new v13(Float64Array, v4); } catch (e) {}
    function f15(a16, a17) {
        v8.sort();
        return a17;
    }
    Object.defineProperty(this, "toString", { writable: true, value: f15 });
    Object.defineProperty(v8, 5, { writable: true, value: this });
}
new F9(F0, v8);
