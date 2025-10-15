function f1() {
    function f2() {
        return f2;
    }
    return Worker(f2, -4096n);
}
const v6 = ({ next: f1 }).next;
try { v6(); } catch (e) {}
