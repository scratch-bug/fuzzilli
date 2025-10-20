function f2() {
    return 0;
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
            function f10() {
                while (0) {
                }
                return v9;
            }
            const v12 = {};
            v12.ownKeys = f4;
            const v14 = new Proxy(f8, v12);
            for (const v15 in v14) {
            }
            return 0;
        }
        const v16 = Symbol.iterator;
        f6.bind(null, ...{ [v16]: f7 });
        return f4;
    }
    return f4;
}
function f20(a21) {
    return 0;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f20 });
try { new Uint16Array(f2); } catch (e) {}
