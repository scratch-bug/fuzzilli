class C0 {
    static {
        super.a += this;
    }
}
class C2 extends C0 {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7(a8, a9) {
    C2.a;
}
F3[Symbol.toPrimitive] = f7;
class C13 {
    static [F3](a15, a16, a17) {
    }
}
