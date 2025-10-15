function f1() {
    return f1;
}
function f2() {
    function f3() {
        const v5 = %WasmStruct();
        Set.__proto__ = v5;
        return { done: true };
    }
    return { next: f3 };
}
const v9 = Symbol.iterator;
f1.bind(null, ...{ [v9]: f2 });
