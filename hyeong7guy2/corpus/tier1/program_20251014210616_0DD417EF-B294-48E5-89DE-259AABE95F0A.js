function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        function f5() {
            return f5;
        }
        function f6() {
            function f7() {
                return f3;
            }
            const v8 = {};
            v8.getPrototypeOf = v8;
            const v10 = new Proxy(f7, v8);
            for (const v11 in v10) {
            }
            return v10;
        }
        const v12 = Symbol.iterator;
        const v13 = { [v12]: f6 };
        f5.bind(null, ...v13);
        return v13;
    }
    return f3;
}
function f16(a17) {
    return Symbol;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f16 });
try { new Uint16Array(f1); } catch (e) {}
