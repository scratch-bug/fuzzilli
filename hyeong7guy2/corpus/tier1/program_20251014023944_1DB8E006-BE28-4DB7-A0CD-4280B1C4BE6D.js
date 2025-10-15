function f0() {
}
function f2() {
    function f3() {
        for (let v5 = 0; v5 < 100; v5++) {
        }
        Array(1048576);
        return { done: true };
    }
    return { next: f3 };
}
const v11 = Symbol.iterator;
f0.bind(null, ...{ [v11]: f2 });
