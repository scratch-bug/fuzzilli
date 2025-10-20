const v1 = [33598,33598,33598];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v12 = Symbol.iterator;
            const v18 = {
                [v12]() {
                    const v17 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    v1[10] |= 33598;
                    return v17;
                },
            };
            const v21 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v21, ...v18);
        }
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v23 = new F2();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
class C29 {
    static [v23](a31, a32, a33) {
    }
    static [v23](a35, a36, a37) {
    }
}
