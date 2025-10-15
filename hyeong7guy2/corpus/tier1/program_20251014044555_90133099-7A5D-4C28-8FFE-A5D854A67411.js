function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        const v6 = Error();
        v6.stack;
        v6.stack;
        return { done: true };
    }
    return { next: f3 };
}
const v11 = Symbol.iterator;
f1.bind(null, ...{ [v11]: f2 });
