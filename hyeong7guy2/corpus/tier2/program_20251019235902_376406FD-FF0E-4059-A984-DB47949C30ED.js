function f3() {
    return 0;
}
function f4() {
    function f5(a6) {
        function f7() {
            return f7;
        }
        function f8() {
            function f9() {
            }
            try { f9(); } catch (e) {}
            let v11;
            try {
            const t0 = 0;
            v11 = t0();
            } catch (e) {}
            const v19 = {
                [v11](a13, a14) {
                    function* f15(a16, a17, a18) {
                        yield* "h";
                        return a13;
                    }
                },
            };
            v19.ownKeys = f5;
            const v21 = new Proxy(f9, v19);
            for (const v22 in v21) {
            }
            return f8;
        }
        const v23 = Symbol.iterator;
        return f7.bind(null, ...{ [v23]: f8 });
    }
    return f5;
}
function f27(a28) {
    return "h";
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f27 });
try { new Uint16Array(f3); } catch (e) {}
