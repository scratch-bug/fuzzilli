function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        function f5(a6, a7) {
            const v8 = {};
            function f9() {
                return f3;
            }
            function f10(a11) {
                return f1;
            }
            Object.defineProperty(v8, Symbol.dispose, { configurable: true, get: f9, set: f10 });
            using v13 = v8;
            return f3;
        }
        try { f5(); } catch (e) {}
        return { done: true };
    }
    return { next: f3 };
}
const v17 = Symbol.iterator;
f1.bind(null, ...{ [v17]: f2 });
