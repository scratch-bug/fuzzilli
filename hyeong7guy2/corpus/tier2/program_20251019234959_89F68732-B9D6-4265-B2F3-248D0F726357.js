function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            const v10 = new Uint8ClampedArray();
            for (let i12 = 0; i12 < 24941; i12++) {
                v10[0] |= 4294967297;
            }
        }
        new F5();
        return { done: true };
    }
    return { next: f3 };
}
const v22 = Symbol.iterator;
f1.bind(null, ...{ [v22]: f2 });
