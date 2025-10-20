function f1() {
    return f1;
}
function f2() {
    function f3() {
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            const v9 = new Uint8ClampedArray(Symbol, a7);
            for (let i11 = 0; i11 < 24941; i11++) {
                v9[0] |= i11;
            }
        }
        new F4(f2, f2);
        return { done: true };
    }
    return { next: f3 };
}
const v21 = Symbol.iterator;
f1.bind(null, ...{ [v21]: f2 });
