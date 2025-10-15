const t0 = Array.prototype;
t0[3] = WeakSet;
function f4() {
    return Symbol;
}
function f5() {
    function f6() {
        const v8 = Array();
        v8.push(1048576, f6, Symbol);
        v8.includes(Symbol);
        return { done: true };
    }
    return { next: f6 };
}
const v14 = Symbol.iterator;
f4.bind(null, ...{ [v14]: f5 });
