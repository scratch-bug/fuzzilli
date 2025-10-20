for (let i3 = 0, i4 = 10; i4; i4--) {
}
function f11() {
    return f11;
}
function f12() {
    function f13(a14) {
        function f15() {
            return f12;
        }
        function f16() {
            function f17() {
            }
            let v18;
            try {
            const t0 = 0;
            v18 = t0();
            } catch (e) {}
            const v19 = v18 ?? v18;
            const v27 = {
                valueOf(a21, a22, a23, a24) {
                    for (let [v25,v26] of a22) {
                    }
                    return a24;
                },
            };
            v27.ownKeys = v19;
            const v31 = {
                [Symbol]() {
                    const v30 = {
                        next() {
                            return this;
                        },
                    };
                },
            };
            v27.ownKeys = f13;
            const v33 = new Proxy(f17, v27);
            for (const v34 in v33) {
            }
            return v19;
        }
        const v35 = Symbol.iterator;
        f15.bind(null, ...{ [v35]: f16 });
        return f13;
    }
    return f13;
}
function f39(a40) {
    return a40;
}
Object.defineProperty(f11, Symbol.iterator, { configurable: true, enumerable: true, get: f12, set: f39 });
try { new Uint16Array(f11); } catch (e) {}
