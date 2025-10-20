function f1() {
    return {};
}
const v4 = Symbol.toPrimitive;
Uint16Array[v4] = f1;
try {
    const v7 = new Uint32Array(4);
    Object.defineProperty(v7, "signDisplay", { configurable: true, value: Uint16Array });
    const v8 = class extends Uint32Array {
        constructor(a10) {
            super(v7);
            const v12 = [a10,v7];
            Reflect.apply(v7.toLocaleString, this, v12);
        }
    }
    new v8(v4);
} catch(e16) {
}
