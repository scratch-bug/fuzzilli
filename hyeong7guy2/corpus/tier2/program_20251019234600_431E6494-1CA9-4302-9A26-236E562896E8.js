function f1() {
    return Symbol;
}
function f2() {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        function f5() {
            return F3;
        }
        for (let i7 = 0; i7 instanceof f5, i7 < 25000; i7++) {
        }
    }
    new F3();
    function f15() {
        return { done: true };
    }
    return { next: f15 };
}
f2();
const v20 = Symbol.iterator;
f1.bind(null, ...{ [v20]: f2 });
