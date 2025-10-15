function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        for (let i6 = 0; i6 < 25000; i6++) {
            Array.prototype.at.apply(true);
        }
        return { done: true };
    }
    return { next: f3 };
}
const v18 = Symbol.iterator;
f1.bind(null, ...{ [v18]: f2 });
