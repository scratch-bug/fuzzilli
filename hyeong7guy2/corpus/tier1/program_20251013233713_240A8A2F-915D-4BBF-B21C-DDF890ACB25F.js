function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        return { done: true };
    }
    f4.g = f4;
    return { next: f4 };
}
f3();
const v9 = Symbol.iterator;
f2.bind(null, ...{ [v9]: f3 });
new Uint32Array(268435440);
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
}
new F15(Symbol, v9, f2, Uint32Array);
function f22() {
    return f22;
}
function f23() {
    function f24() {
        return { done: true };
    }
    return { next: f24 };
}
const v28 = Symbol.iterator;
f22.bind(null, ...{ [v28]: f23 });
