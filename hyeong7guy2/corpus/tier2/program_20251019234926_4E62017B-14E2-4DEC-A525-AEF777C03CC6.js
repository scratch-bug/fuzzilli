function f1() {
    return f1;
}
function f2() {
    const t4 = Temporal.ZonedDateTime;
    new t4(15n, "-16:00", "islamicc");
    function f9() {
        return { done: true };
    }
    return { next: f9 };
}
const v13 = Symbol.iterator;
f1.bind(null, ...{ [v13]: f2 });
