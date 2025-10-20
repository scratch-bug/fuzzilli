function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            new Uint8ClampedArray(268435441);
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v11 = new F1();
class C12 {
    static [v11](a14, a15, a16) {
    }
}
class C18 {
}
