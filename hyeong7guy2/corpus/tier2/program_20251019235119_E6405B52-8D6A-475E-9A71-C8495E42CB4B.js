function f2() {
    function f3() {
        const v5 = Intl.DateTimeFormat;
        v5("ku", { calendar: "iso8601" });
        return Symbol;
    }
    const t6 = ({ next: f3 }).next;
    t6();
    return f2;
}
const v13 = Symbol.iterator;
const v14 = { [v13]: f2 };
try { Date.bind(null, ...v14); } catch (e) {}
