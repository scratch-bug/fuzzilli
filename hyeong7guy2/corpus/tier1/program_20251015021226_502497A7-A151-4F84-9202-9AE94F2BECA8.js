function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                a12--;
                this.e = a12;
            }
            const v14 = new F9("2147483647", -3612);
            const v15 = v14.e;
            v15 < v15;
            new F9(a6, a3);
            const v21 = Symbol.iterator;
            const v29 = {
                [v21]() {
                    let v23 = 10;
                    v23 % v23;
                    v23--;
                    const v28 = {
                        next() {
                            return { done: v23 };
                        },
                    };
                    return v28;
                },
            };
            const v32 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v32, ...v29);
        }
        f5();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v36 = new F0();
class C37 {
    static [v36](a39, a40, a41) {
    }
}
