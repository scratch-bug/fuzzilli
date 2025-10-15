const v2 = new Int8Array(1000);
function f3() {
    return Int8Array;
}
class C4 extends f3 {
}
const v5 = new C4();
v5.from(v2);
