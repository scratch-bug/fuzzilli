function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
        }
        function f7(a8) {
            const v12 = Symbol.iterator;
            const v21 = {
                [v12]() {
                    const v20 = {
                        next() {
                            const v15 = {};
                            const v18 = new Uint8ClampedArray(956);
                            v18[10] /= undefined;
                            return v15;
                        },
                    };
                    return v20;
                },
            };
            function f23() {
                new Date(WeakSet, Date, 882, ...v21);
            }
            f23();
        }
        new Worker(f7, { type: "function" });
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v30 = new F0();
v30.toString();
class C32 {
}
