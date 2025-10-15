const v1 = class {
}
function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        Array(1048576, v1);
        return { done: true };
    }
    return { next: f4 };
}
const v11 = Symbol.iterator;
f2.bind(null, ...{ [v11]: f3 });
