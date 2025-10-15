function f0() {
    return f0;
}
function f1() {
    function f2() {
        try { WebAssembly.validate(WebAssembly); } catch (e) {}
        return { done: true };
    }
    return { next: f2 };
}
const v9 = Symbol.iterator;
f0.bind(null, ...{ [v9]: f1 });
