class C2 extends Array {
    constructor(a4) {
        super(14);
    }
}
class C5 extends C2 {
}
const v6 = new C5();
const v8 = new Int32Array(Array);
const t9 = v8.constructor;
new t9(v6);
