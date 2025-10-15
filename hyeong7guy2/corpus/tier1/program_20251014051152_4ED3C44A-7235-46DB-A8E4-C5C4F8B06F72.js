class C1 extends Uint16Array {
}
class C2 extends C1 {
}
new C2();
for (let v4 = 0; v4 < 50; v4++) {
    const v5 = class {
    }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        const t10 = a9.constructor;
        new t10();
    }
}
