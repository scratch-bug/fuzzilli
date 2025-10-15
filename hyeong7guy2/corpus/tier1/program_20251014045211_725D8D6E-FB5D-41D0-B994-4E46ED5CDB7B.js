function f1() {
    return f1;
}
function f2() {
    const v4 = [3,3,3];
    v4[4] = v4;
    v4.length = 3;
    function f5() {
        return { done: true };
    }
    return { next: f5 };
}
const v9 = Symbol.iterator;
f1.bind(null, ...{ [v9]: f2 });
