function f1() {
    return Symbol;
}
const v2 = [29578,0,1073741823,1073741824,1073741825,-1024,-4294967295,65536,9996,1073741823];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = v2[1];
            v10 << v10;
            for (let v12 = 0; v12 < 5; v12++) {
                f1.__proto__ = v10;
                function f13() {
                    return a6;
                }
                function f14() {
                    function f15() {
                        return { done: true };
                    }
                    return { next: f15 };
                }
                const v19 = Symbol.iterator;
                f13.bind(null, ...{ [v19]: f14 });
            }
            return a9;
        }
        f8(v2);
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v25 = new F3();
class C26 {
    static [v25](a28, a29, a30) {
    }
}
