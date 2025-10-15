const v1 = class {
}
function f2() {
    function f4() {
        return v1;
    }
    function f5() {
        function f6() {
            f6.arguments;
            return { done: true };
        }
        return { next: f6 };
    }
    const v11 = Symbol.iterator;
    f4.bind(null, ...{ [v11]: f5 });
    const v15 = Symbol.dispose;
    const v18 = {
        [v15]() {
            f2();
        },
    };
    using v19 = v18;
    return null;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
