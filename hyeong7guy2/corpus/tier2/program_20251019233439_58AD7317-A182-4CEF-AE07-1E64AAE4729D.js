function f1() {
    return f1;
}
function f2() {
    const v4 = Temporal.ZonedDateTime;
    const v5 = `-65537${f1}valueOf`;
    try {
        new v4(-1832708283n, v5);
    } catch(e8) {
    }
    function f9() {
        return { done: true };
    }
    return { next: f9 };
}
const v13 = Symbol.iterator;
f1.bind(null, ...{ [v13]: f2 });
