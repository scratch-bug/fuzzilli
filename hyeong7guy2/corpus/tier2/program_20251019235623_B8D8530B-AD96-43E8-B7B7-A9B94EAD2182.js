let v1 = undefined;
v1 = 3;
function f3() {
    return Symbol;
}
function f4() {
    function f5() {
        function f7(a8, a9) {
            const v10 = {};
            function f11() {
                return f5;
            }
            function f12(a13) {
                return f12;
            }
            Object.defineProperty(v10, Symbol.dispose, { configurable: true, get: f11, set: f12 });
            using v15 = v10;
            return f4;
        }
        try { f7(f7, f5); } catch (e) {}
        return { done: true };
    }
    const v18 = { next: f5 };
    f5 = v1;
    return v18;
}
const v19 = Symbol.iterator;
f3.bind(null, ...{ [v19]: f4 });
