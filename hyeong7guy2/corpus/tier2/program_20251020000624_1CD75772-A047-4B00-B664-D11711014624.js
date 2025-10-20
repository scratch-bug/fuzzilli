function f1() {
    return f1;
}
function f2() {
    function f3() {
        delete Array[Symbol.species];
        Array[1] = WeakMap;
        return { done: true };
    }
    return { next: f3 };
}
const v11 = Symbol.iterator;
f1.bind(null, ...{ [v11]: f2 });
