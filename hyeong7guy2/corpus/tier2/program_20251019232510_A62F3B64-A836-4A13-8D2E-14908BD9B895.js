for (let i4 = 0, i5 = 10; i5; i5--) {
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    function f15() {
        function f16(a17) {
            const v20 = Symbol.iterator;
            const v31 = {
                [v20]() {
                    const v23 = new SharedArrayBuffer(8);
                    const v25 = new Int16Array(v23);
                    v25.reverse();
                    const v30 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v30;
                },
            };
            const v34 = new Int16Array(a17, 882, 882);
            new Date(WeakSet, Date, 882, ...v34, ...v31);
        }
        return f16;
    }
    Object.defineProperty(this, "toString", { get: f15 });
}
const v36 = new F11();
class C37 {
    static [v36](a39, a40, a41) {
    }
}
