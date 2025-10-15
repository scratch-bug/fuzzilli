function f0() {
    return f0;
}
class C1 {
}
try { f0(C1, C1, C1, f0, ...-26614n); } catch (e) {}
const v4 = class {
    static #o(a6, a7, a8) {
        function f9() {
            return a8;
        }
        class C10 {
            static [f9](a12, a13, a14, a15) {
            }
        }
    }
}
