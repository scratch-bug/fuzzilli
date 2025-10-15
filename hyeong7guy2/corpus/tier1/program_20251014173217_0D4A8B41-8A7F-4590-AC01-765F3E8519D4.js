const v1 = [29578,0,1073741823,1073741824,1073741825,-1024,-4294967295,65536,9996,1073741823];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = v1[1];
            v9 << v9;
            for (let v11 = 0; v11 < 5; v11++) {
                function f12() {
                    return a4;
                }
                function f13() {
                    function f14() {
                        return { done: true };
                    }
                    return { next: f14 };
                }
                const v18 = Symbol.iterator;
                f12.bind(null, ...{ [v18]: f13 });
            }
        }
        f7(f7(a5));
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v24 = new F2();
class C25 {
    static [v24](a27, a28, a29) {
    }
}
