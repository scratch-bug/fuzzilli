const v2 = new Int32Array(4096);
function f3() {
    return v2;
}
class C4 extends f3 {
}
const v5 = new C4();
(`undefined${v5}reverse`).match(/O/g);
