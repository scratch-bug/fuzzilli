class C2 {
    static toString(a4, a5) {
        let v3 = this;
        [v3,,...v3] = a5;
        return a5;
    }
    static m(a7, a8) {
        return a8;
    }
}
const v9 = new C2();
class C10 {
    [-4.0](a12) {
        const v15 = new Uint8Array(8);
        return v15;
    }
}
new C10();
new C10();
new C10();
const v19 = new C10();
class C20 extends C10 {
    #toString(a22, a23) {
        const v24 = (a25, a26, a27) => {
        };
        return a22;
    }
}
new C20();
function F29(a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a32;
}
const v34 = new F29(C2, v19, v9);
new F29(C20, v19, v34);
function f39() {
    return Symbol;
}
function f40() {
    function f41() {
        return { done: true };
    }
    f41.g = f41;
    return { next: f41 };
}
f40();
const v46 = Symbol.iterator;
f39.bind(null, ...{ [v46]: f40 });
new Uint32Array(268435440);
function F52(a54, a55, a56, a57) {
    if (!new.target) { throw 'must be called with new'; }
}
new F52(Symbol, v46, f39, Uint32Array);
function f59() {
    return f59;
}
function f60() {
    function f61() {
        return { done: true };
    }
    return { next: f61 };
}
const v65 = Symbol.iterator;
f59.bind(null, ...{ [v65]: f60 });
