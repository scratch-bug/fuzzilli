function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
}
new F1();
class C4 extends F1 {
}
for (let v6 = 0; v6 < 500; v6++) {
    v6 < 25000;
    new F1();
    v6++;
}
