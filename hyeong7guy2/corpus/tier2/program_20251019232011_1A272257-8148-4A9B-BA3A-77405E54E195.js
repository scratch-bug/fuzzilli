function f1() {
    return Symbol;
}
function f2() {
    function f4() {
        const v6 = { done: true };
        parseInt("+11:00");
        return v6;
    }
    return { next: f4 };
}
const v10 = Symbol.iterator;
f1.bind(null, ...{ [v10]: f2 });
