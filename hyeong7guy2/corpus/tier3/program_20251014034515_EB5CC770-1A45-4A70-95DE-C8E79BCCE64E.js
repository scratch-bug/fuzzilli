class C2 extends Uint16Array {
}
class C3 extends C2 {
}
const v4 = new C3();
for (let v7 = 0; v7 < 100; v7++) {
    const v8 = class {
    }
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        const t10 = a13.constructor;
        new t10();
        this.b = Int16Array;
    }
    new F10(v8, v4);
    2 ^ 2;
}
