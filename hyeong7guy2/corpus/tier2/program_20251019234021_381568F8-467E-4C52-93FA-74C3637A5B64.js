const v3 = class extends Float32Array {
    static toString(a5, a6, a7, a8) {
        /[a-zA-Z0-9]/dsgmv;
    }
}
const v12 = new Int16Array(512);
function f13() {
    return v12;
}
const v14 = [693913.4712015034,-314050.5385797281];
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a17, "constructor", { enumerable: true, value: f13 });
    function f19() {
        function f20(a21) {
            const v23 = v14.constructor.apply();
            v23[406] = v23;
            return a21;
        }
        f20(v12);
        %OptimizeMaglevOnNextCall(f20);
        return f20;
    }
    f19();
    Object.defineProperty(this, "toString", { get: f19 });
}
new F15(v3);
const v27 = new F15(v14);
class C28 {
    static [v27](a30, a31, a32) {
    }
}
