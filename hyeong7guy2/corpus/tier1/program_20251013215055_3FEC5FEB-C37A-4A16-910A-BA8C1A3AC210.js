function f2(a3, a4) {
    %PretenureAllocationSite(Object);
}
Object.defineProperty(Uint32Array, Symbol.toPrimitive, { value: f2 });
const v8 = new Uint32Array(4);
const v9 = class extends Uint32Array {
    constructor(a11) {
        super(v8);
        const v13 = [a11,v8];
        Reflect.apply(v8.toLocaleString, this, v13);
    }
}
new v9(4);
class C17 {
    static [Uint32Array](a19, a20, a21, a22) {
    }
}
