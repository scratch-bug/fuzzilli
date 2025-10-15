function f0() {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    function F6() {
        if (!new.target) { throw 'must be called with new'; }
        function f8(a9) {
            const v10 = { ...this };
        }
        f8();
    }
    new F6();
}
const t15 = ({ next: f5 }).next;
t15();
