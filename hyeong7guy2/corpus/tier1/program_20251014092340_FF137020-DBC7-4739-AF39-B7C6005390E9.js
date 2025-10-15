function f1() {
    for (let v2 = 0; v2 < 5; v2++) {
        v2++;
        const t2 = Temporal.PlainDate;
        new t2(v2, v2, 1000);
    }
    return 1000;
}
const v8 = ({ next: f1 }).next;
try { v8(); } catch (e) {}
