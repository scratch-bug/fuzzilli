function f1() {
    return 256;
}
function f2() {
    function f3() {
        return { done: true };
    }
    const v6 = { next: f3 };
    function f7() {
        return v6;
    }
    function f8() {
        function f9(a10) {
            function f11(a12, a13) {
                return f9;
            }
            Worker(f11, { type: 256 });
            return f9;
        }
        return f9;
    }
    function f17(a18) {
        return a18;
    }
    Object.defineProperty(f7, Symbol.iterator, { configurable: true, enumerable: true, get: f8, set: f17 });
    try { new Uint16Array(f7); } catch (e) {}
    return v6;
}
const v24 = Symbol.iterator;
f1.bind(null, ...{ [v24]: f2 });
