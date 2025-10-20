function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    a3++;
    this.g = a3;
}
const v5 = new F1(2975);
new F1();
function f7() {
    return v5;
}
class C8 extends f7 {
    [F1];
}
new C8();
