function f2() {
    return Map;
}
function f3() {
    const v5 = Temporal.PlainTime;
    const v6 = new v5();
    try { v6.round(Map); } catch (e) {}
    const v9 = ("-16:00").constructor;
    const v10 = new v9(v9, v5, Temporal);
    v10[501];
    function f12() {
        return { done: true };
    }
    return { next: f12 };
}
const v16 = Symbol.iterator;
f2.bind(null, ...{ [v16]: f3 });
