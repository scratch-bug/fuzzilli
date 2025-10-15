function f0() {
    return f0;
}
function f1() {
    function f3() {
        Array(1048576).includes(Symbol);
        return { done: true };
    }
    return { next: f3 };
}
const v12 = Symbol.iterator;
f0.bind(null, ...{ [v12]: f1 }).length;
