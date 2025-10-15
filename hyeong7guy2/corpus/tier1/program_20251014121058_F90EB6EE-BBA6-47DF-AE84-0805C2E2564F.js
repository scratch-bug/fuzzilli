function f1() {
    return f1;
}
function f2() {
    Object.groupBy("bigint", Object);
    function f5() {
        return { done: true };
    }
    return { next: f5 };
}
const v10 = Symbol.iterator;
f1.bind(null, ...{ [v10]: f2 });
