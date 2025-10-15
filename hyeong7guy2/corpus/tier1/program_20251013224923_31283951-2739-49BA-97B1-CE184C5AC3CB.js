function f0() {
    function f1() {
        return f1;
    }
    Worker(f1, {});
    return f0;
}
const v6 = ({ next: f0 }).next;
try { v6(); } catch (e) {}
