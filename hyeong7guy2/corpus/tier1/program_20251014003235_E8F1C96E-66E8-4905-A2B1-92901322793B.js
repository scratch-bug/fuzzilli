class C0 {
}
class C1 extends C0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = F2.__defineGetter__;
try { new v6(); } catch (e) {}
function f8() {
    function f10() {
        function f11(a12) {
            return a12;
        }
        class C13 extends f11 {
            c = C1;
            e;
        }
        with (Array) {
        }
        return f11;
    }
    new Worker(f10, { type: "function" });
    return Array(1048576);
}
const t25 = ({ next: f8 }).next;
t25();
