function f0() {
    return f0;
}
function f1() {
    function f2() {
        return { done: true, __proto__: f0 };
    }
    return { next: f2 };
}
const v7 = Symbol.iterator;
f0.bind(null, ...{ [v7]: f1 });
