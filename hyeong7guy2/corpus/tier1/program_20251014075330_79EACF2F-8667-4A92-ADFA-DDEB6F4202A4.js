const v7 = {
    construct(a1, a2) {
        function f3() {
            return a1;
        }
        Object.defineProperty(a2, 634, { configurable: true, get: f3 });
        a2[1667] = Symbol;
        a2.concat(Symbol, a2);
        return Reflect;
    },
};
function f9() {
    return f9;
}
const v10 = new Proxy(f9, v7);
Reflect.construct(v10, v10);
