let v0 = "o";
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 extends F1 {
}
const v7 = [16,-15,1000,-4294967296,1073741824,51600,61480,-2];
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = this.constructor;
    try { new v14(); } catch (e) {}
    function f16(a17, a18, a19) {
        [a13,C6,a19,v0] = a17;
    }
    try { f16(v7); } catch (e) {}
}
new F10();
new F10();
