const v2 = this.AsyncDisposableStack;
const v3 = new v2(this, v2, v2, Symbol, Symbol);
function f4() {
    return f4;
}
function f5() {
    function f6(a7, a8) {
        let v9;
        try { v9 = a8(v3); } catch (e) {}
        return v9;
    }
    for (let v10 = 0; v10 < 5; v10++) {
        %OptimizeFunctionOnNextCall(f6);
        f6();
    }
    function f12() {
        return { done: true };
    }
    return { next: f12 };
}
const v16 = Symbol.iterator;
f4.bind(null, ...{ [v16]: f5 });
