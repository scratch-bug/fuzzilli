function f2() {
    return f2;
}
function f3() {
    function f4(a5) {
        function f6() {
            return f4;
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
            function f11() {
                while (0) {
                    try {
                    } catch(e13) {
                    }
                }
                return a5;
            }
            const v14 = {};
            v14.ownKeys = f4;
            const v16 = new Proxy(f8, v14);
            for (const v17 in v16) {
            }
            return f8;
        }
        const v18 = Symbol.iterator;
        const v19 = { [v18]: f7 };
        v19.h = v19;
        f6.bind(null, ...v19);
        function F22(a24, a25) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v26 = F22();
        class C27 {
            static [v26](a29, a30, a31) {
            }
            static [v26](a33, a34, a35) {
            }
        }
        return 0;
    }
    return f4;
}
function f36(a37) {
    return a37;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f36 });
try { new Uint16Array(f2); } catch (e) {}
