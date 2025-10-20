function f3() {
    return 0;
}
function f4() {
    function f5(a6) {
        function f7() {
            return f5;
        }
        function f8() {
            function f9() {
            }
            let v10;
            try {
            const t0 = 0;
            v10 = t0();
            } catch (e) {}
            const v18 = {
                [v10](a12, a13) {
                    function* f14(a15, a16, a17) {
                        yield* "h";
                        return a15;
                    }
                },
            };
            v18.ownKeys = f5;
            const v20 = new Proxy(f9, v18);
            for (const v21 in v20) {
            }
            return f3;
        }
        const v22 = Symbol.iterator;
        return f7.bind(null, ...{ [v22]: f8 });
    }
    return f5;
}
function f26(a27) {
    return a27;
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f26 });
try { new Uint16Array(f3); } catch (e) {}
