function f1() {
    return f1;
}
function f2() {
    function f3() {
        const v5 = { done: true };
        Math.atan2(-1, 10);
        return v5;
    }
    return { next: f3 };
}
const v11 = Symbol.iterator;
f1.bind(null, ...{ [v11]: f2 });
