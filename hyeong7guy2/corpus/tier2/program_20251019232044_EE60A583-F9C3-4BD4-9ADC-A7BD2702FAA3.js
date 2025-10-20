function f1() {
    return Symbol;
}
function f2() {
    function f3(a4, a5) {
        const v6 = a5.slice();
        const t6 = v6.constructor;
        new t6(v6);
        return v6;
    }
    for (let v9 = 0; v9 < 5; v9++) {
        %OptimizeFunctionOnNextCall(f3);
        f3([38824,127], "-1127306849");
    }
    function f13() {
        return { done: true };
    }
    return { next: f13 };
}
const v17 = Symbol.iterator;
f1.bind(null, ...{ [v17]: f2 });
