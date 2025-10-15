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
        function f7(a8) {
            return Symbol(a8).__defineGetter__(v2, f7);
        }
        f7();
        return { done: true };
    }
    f5();
    return { next: f5 };
}
const v15 = Symbol.iterator;
f3.bind(null, ...{ [v15]: f4 });
