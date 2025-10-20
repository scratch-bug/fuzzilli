function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        function f5() {
        }
        function f6() {
            function f7() {
                return f7;
            }
            const v8 = {};
            v8.defineProperty = f5;
            const v10 = new Proxy(f7, v8);
            function f11() {
                return f11;
            }
            function f12(a13) {
                return Proxy;
            }
            Object.defineProperty(v10, "h", { configurable: true, get: f11, set: f12 });
            return f11;
        }
        const v14 = Symbol.iterator;
        f5.bind(null, ...{ [v14]: f6 });
        return null;
    }
    return f3;
}
function f18(a19) {
    return f2;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f18 });
try { new Uint16Array(f1); } catch (e) {}
