function f1() {
}
function f2() {
    function f3() {
        Array(1048576);
        1048576 ?? 1048576;
        true || true;
        return { done: true };
    }
    return { next: f3 };
}
const v13 = Symbol.iterator;
f1.bind(null, ...{ [v13]: f2 });
