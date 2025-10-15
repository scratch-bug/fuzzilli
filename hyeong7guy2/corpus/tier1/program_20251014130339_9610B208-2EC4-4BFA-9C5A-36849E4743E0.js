const v1 = class extends Set {
}
function f2() {
    return v1;
}
function f3() {
    function f4() {
        const v6 = %WasmStruct();
        Set.__proto__ = v6;
        return { done: true };
    }
    return { next: f4 };
}
const v10 = Symbol.iterator;
f2.bind(null, ...{ [v10]: f3 });
