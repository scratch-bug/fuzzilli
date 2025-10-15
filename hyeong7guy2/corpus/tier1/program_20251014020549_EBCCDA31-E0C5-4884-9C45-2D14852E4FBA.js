function f1() {
}
function f2() {
    function f3() {
        gc();
        const v7 = { done: true };
        v7[Symbol.toStringTag] = 1000;
        return v7;
    }
    const v11 = { next: f3 };
    v11.next();
    return v11;
}
const v14 = Symbol.iterator;
f1.bind(null, ...{ [v14]: f2 });
