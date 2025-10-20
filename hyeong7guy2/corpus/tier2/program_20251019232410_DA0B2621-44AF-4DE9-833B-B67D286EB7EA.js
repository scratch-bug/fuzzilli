function f2() {
    return -2.2250738585072014e-308;
}
function f3() {
    function f4() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            (-2.2250738585072014e-308).toFixed(F5);
        }
        new F5(F5, Symbol);
        return { done: true };
    }
    return { next: f4 };
}
const v14 = Symbol.iterator;
f2.bind(null, ...{ [v14]: f3 });
