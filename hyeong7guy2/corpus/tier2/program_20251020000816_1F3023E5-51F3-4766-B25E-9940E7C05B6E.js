function f2() {
    return f2;
}
function f3() {
    function f4(a5) {
        function f6() {
            return f6;
        }
        function f7() {
            function f8() {
            }
            let v9;
            try {
            const t0 = 0;
            v9 = t0();
            } catch (e) {}
            v9 ?? v9;
            const v11 = {};
            v11.ownKeys = f4;
            const v13 = new Proxy(f8, v11);
            for (const v14 in v13) {
                function F15(a17, a18) {
                    if (!new.target) { throw 'must be called with new'; }
                }
            }
            return Proxy;
        }
        const v19 = Symbol.iterator;
        f6.bind(null, ...{ [v19]: f7 });
        return f4;
    }
    return f4;
}
function f23(a24) {
    return a24;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f23 });
try { new Uint16Array(f2); } catch (e) {}
