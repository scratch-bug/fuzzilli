function f1() {
    return Symbol;
}
const v2 = class extends f1 {
}
function f3() {
    return v2;
}
function f4() {
    function f5() {
        Error().stack;
        return { done: true };
    }
    return { next: f5, __proto__: v2 };
}
const v12 = Symbol.iterator;
f3.bind(null, ...{ [v12]: f4 });
