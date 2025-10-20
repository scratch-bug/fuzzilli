function f2() {
    return f2;
}
function f3() {
    function f4() {
        function f5() {
            return f4;
        }
        function f6() {
            function f7() {
                return f7;
            }
            f7.initial = 894439.2405599067;
            const t13 = WebAssembly.Memory;
            new t13(f7);
            return f4;
        }
        function f11(a12) {
            return Symbol;
        }
        Object.defineProperty(f5, Symbol.iterator, { configurable: true, enumerable: true, get: f6, set: f11 });
        try { new Uint16Array(f5); } catch (e) {}
        return { done: true };
    }
    return { next: f4 };
}
const v19 = Symbol.iterator;
f2.bind(null, ...{ [v19]: f3 });
