const v1 = -65537n ^ -65537n;
function f2() {
    return -65537n;
}
function f3() {
    function f4() {
        return { done: true };
    }
    const v7 = { next: f4 };
    function f8() {
        return v7;
    }
    function f9() {
        for (let v11 = 0; v11 < 5; v11++) {
            const t14 = 0.5999524236364984;
            t14[v1] <<= v11;
        }
    }
    function f12(a13) {
        return -65537n;
    }
    Object.defineProperty(f8, Symbol.iterator, { configurable: true, enumerable: true, get: f9, set: f12 });
    new Uint16Array(f8);
    return v7;
}
const v19 = Symbol.iterator;
f2.bind(null, ...{ [v19]: f3 });
