function f2() {
    return f2;
}
function f3() {
    Object["create"](Temporal.__proto__, 2.9386310240478436e+307);
    function f9() {
        return { done: true };
    }
    return { next: f9 };
}
const v13 = Symbol.iterator;
f2.bind(null, ...{ [v13]: f3 });
