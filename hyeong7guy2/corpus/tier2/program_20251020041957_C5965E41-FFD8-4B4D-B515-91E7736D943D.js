function f2() {
    return f2;
}
function f3() {
    function f4(a5) {
        function f6() {
            return f3;
        }
        function f7() {
            function f8() {
            }
            let v9;
            try { v9 = f8(); } catch (e) {}
            let v10;
            try { v10 = v9(); } catch (e) {}
            v10 ?? v10;
            const v19 = {
                [f2](a13, a14) {
                    function* f15(a16, a17, a18) {
                        yield* "h";
                        return a16;
                    }
                },
            };
            v19.ownKeys = f4;
            const v21 = new Proxy(f8, v19);
            for (const v22 in v21) {
            }
            return f4;
        }
        const v23 = Symbol.iterator;
        return f6.bind(null, ...{ [v23]: f7 });
    }
    return f4;
}
function f27(a28) {
    return f2;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f27 });
try { new Uint16Array(f2); } catch (e) {}
