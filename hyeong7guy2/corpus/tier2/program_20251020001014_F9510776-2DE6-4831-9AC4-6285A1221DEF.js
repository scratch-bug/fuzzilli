function f2() {
    return 0;
}
function f3() {
    function f4(a5) {
        function f6() {
            return Symbol;
        }
        function f7() {
            function f8() {
            }
            let v9;
            try {
            const t0 = 0;
            v9 = t0(f7, f7, f8);
            } catch (e) {}
            v9 ?? v9;
            const v11 = {};
            v11.ownKeys = f7;
            const v13 = new Proxy(f8, v11);
            for (const v14 in v13) {
            }
            return v9;
        }
        const v15 = Symbol.iterator;
        return f6.bind(null, ...{ [v15]: f7 });
    }
    return f4;
}
function f19(a20) {
    return f19;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f19 });
try { new Uint16Array(f2); } catch (e) {}
