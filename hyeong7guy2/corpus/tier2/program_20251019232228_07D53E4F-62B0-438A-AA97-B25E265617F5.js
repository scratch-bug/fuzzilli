const v2 = new Uint32Array(Uint32Array);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function f10(a11) {
                const v19 = {
                    [Symbol]() {
                        const v18 = {
                            next() {
                                const v17 = { __proto__: a11 };
                                return v2;
                            },
                        };
                    },
                };
                const v22 = new Int16Array();
                function f23() {
                    return Date(WeakSet, Date, 882, v22, v19);
                }
                v2[2] &= 9007199254740992;
                return f7;
            }
            f10.call(f8, a9, f8, a5, f7);
            f7.constructor = f10;
            f7.constructor.call();
            return f8;
        }
        f8(f8());
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v30 = new F3(F3, Uint32Array);
v30.toString();
