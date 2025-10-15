const v1 = class {
    [-995.9478888917519](a3, a4, a5, a6) {
    }
}
const v7 = new v1();
function f9() {
    return Symbol;
}
function f10() {
    function f11() {
        Error().stack;
        return { done: true };
    }
    f11.call(v7);
    return { next: f11 };
}
const v19 = Symbol.iterator;
f9.bind(null, ...{ [v19]: f10 });
