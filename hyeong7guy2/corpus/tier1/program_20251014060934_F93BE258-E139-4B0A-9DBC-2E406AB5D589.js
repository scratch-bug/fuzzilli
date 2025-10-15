function f2() {
    const v4 = Temporal.PlainDate;
    v4.compare(Date, 1000);
    return v4;
}
const v6 = { next: f2 };
try { v6.next(v6, v6); } catch (e) {}
