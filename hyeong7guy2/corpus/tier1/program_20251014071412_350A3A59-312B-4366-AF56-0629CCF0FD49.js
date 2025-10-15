Date.calendar = Date;
function f1() {
    Temporal.PlainDate.compare(Date);
    return f1;
}
const v5 = { next: f1 };
try { v5.next(); } catch (e) {}
