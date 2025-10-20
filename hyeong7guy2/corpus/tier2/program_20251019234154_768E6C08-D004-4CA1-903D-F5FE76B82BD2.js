function f1() {
    return f1;
}
const v2 = class extends f1 {
}
function f3() {
    return f3;
}
function f4() {
    function f5() {
        function f7(a8) {
            const v10 = Error();
            const v11 = v10.__defineGetter__(v2, f7);
            v10.stack;
            return v11;
        }
        f7();
        f7();
        return { done: true };
    }
    f5();
    return { next: f5 };
}
const v18 = Symbol.iterator;
f3.bind(null, ...{ [v18]: f4 });
