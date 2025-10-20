function f2() {
    return -1000000000000.0;
}
function f3() {
    function f4() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            (-1000000000000.0).toFixed(this, a7, f2);
        }
        new F5(f4, -1000000000000.0);
        return { done: true };
    }
    return { next: f4 };
}
const v14 = Symbol.iterator;
f2.bind(null, ...{ [v14]: f3 });
