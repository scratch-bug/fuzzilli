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
                return f7;
            }
            const v8 = {};
            v8.ownKeys = f3;
            const v10 = new Proxy(f7, v8);
            function f11() {
                return f7;
            }
            function f12(a13) {
                return f12;
            }
            Object.defineProperty(v10, "h", { configurable: true, get: f11, set: f12 });
            for (const v14 in v10) {
            }
            return Proxy;
        }
        const v15 = Symbol.iterator;
        f5.bind(null, ...{ [v15]: f6 });
        return a4;
    }
    return f3;
}
function f19(a20) {
    return f19;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f19 });
try { new Uint16Array(f1); } catch (e) {}
