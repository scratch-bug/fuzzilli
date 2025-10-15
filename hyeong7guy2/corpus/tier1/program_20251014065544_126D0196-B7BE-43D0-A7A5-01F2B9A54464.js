function f1() {
    return Symbol;
}
function f2() {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        function f6() {
            return f6;
        }
        for (let i8 = 0; 1073741823 instanceof f6, i8 < 25000; i8++) {
        }
    }
    new F4();
    function f16() {
        return { done: true };
    }
    return { next: f16 };
}
f2();
const v21 = Symbol.iterator;
f1.bind(null, ...{ [v21]: f2 });
