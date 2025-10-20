function f2() {
    return Symbol;
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    try { new v5(13n, "-16:00", -536870912); } catch (e) {}
    function f9() {
        return { done: true };
    }
    return { next: f9 };
}
const v13 = Symbol.iterator;
f2.bind(null, ...{ [v13]: f3 });
