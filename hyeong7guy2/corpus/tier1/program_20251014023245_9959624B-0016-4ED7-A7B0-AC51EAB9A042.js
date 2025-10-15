function f0() {
    const v3 = Array(1048576);
    try { v3.find(); } catch (e) {}
    for (let i7 = 0, i8 = 10; i8; i8--) {
        Array(1048576);
    }
}
const t7 = ({ next: f0 }).next;
t7();
