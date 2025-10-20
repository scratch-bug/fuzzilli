const v1 = new Date();
function f3() {
    return f3;
}
function f4() {
    function f5() {
        Temporal.minutes = v1;
        const t7 = Temporal.PlainYearMonth;
        const v9 = new t7(3.0, 3.0);
        try { v9.add(Temporal); } catch (e) {}
        return { done: true };
    }
    return { next: f5 };
}
const v14 = Symbol.iterator;
f3.bind(null, ...{ [v14]: f4 });
