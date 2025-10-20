const v1 = class extends Set {
}
function f2() {
    return Set;
}
function f3() {
    function f4() {
        const v5 = %WasmStruct();
        Set.__proto__ = v5;
        return { done: v5 };
    }
    f4();
    return { next: f4 };
}
const v10 = Symbol.iterator;
f2.bind(null, ...{ [v10]: f3 });
