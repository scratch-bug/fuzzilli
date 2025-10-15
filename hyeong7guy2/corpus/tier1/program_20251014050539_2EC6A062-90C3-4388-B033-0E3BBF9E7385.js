function f1() {
    return f1;
}
function f2() {
    function f3() {
        f3.arguments;
        return { done: true };
    }
    return { next: f3 };
}
const v8 = Symbol.iterator;
f1.bind(null, ...{ [v8]: f2 });
