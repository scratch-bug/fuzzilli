function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a6;
    this.g = 37421n;
}
new F4(F4);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    a12.a = a11;
}
const v13 = new F9(6648n, 536870888);
new F9(v13, 6648n);
function f15() {
    return 536870888;
}
const v16 = class extends f15 {
    static set c(a18) {
        Object[a18] <= v16;
        super.a;
    }
    get g() {
        return this;
    }
}
new v16();
function f27() {
    return "🙌🏿";
}
const v29 = new BigInt64Array(97);
v29.join().replaceAll(f27);
