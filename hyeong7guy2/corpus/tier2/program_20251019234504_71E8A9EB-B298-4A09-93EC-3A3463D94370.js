function f2() {
    return f2;
}
function f3() {
    function f4(a5) {
        function f6() {
            return a5;
        }
        function f7() {
            function f8() {
                for (const v10 in WeakSet) {
                }
                return WeakSet;
            }
            try {
            const t0 = 0;
            t0(f2, f4, f8, f3, 0);
            } catch (e) {}
            const v12 = {};
            v12.ownKeys = f4;
            const v14 = new Proxy(f8, v12);
            for (const v15 in v14) {
            }
            return v14;
        }
        const v16 = Symbol.iterator;
        return f6.bind(null, ...{ [v16]: f7 });
    }
    return f4;
}
function f20(a21) {
    return f20;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f20 });
try { new Uint16Array(f2); } catch (e) {}
