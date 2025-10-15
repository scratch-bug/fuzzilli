function f1() {
    return f1;
}
function f2() {
    function f3() {
        const v5 = { done: true };
        v5 instanceof f3;
        return v5;
    }
    return { next: f3 };
}
const v8 = Symbol.iterator;
f1.bind(null, ...{ [v8]: f2 });
