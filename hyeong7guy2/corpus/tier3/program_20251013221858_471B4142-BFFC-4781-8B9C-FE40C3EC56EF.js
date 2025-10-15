const v1 = gc();
function f2() {
    return v1;
}
const v3 = f2.__defineSetter__;
let v4;
try { v4 = new v3(); } catch (e) {}
function f5() {
    class C6 {
        static {
            eval(C6);
        }
    }
    return v4;
}
