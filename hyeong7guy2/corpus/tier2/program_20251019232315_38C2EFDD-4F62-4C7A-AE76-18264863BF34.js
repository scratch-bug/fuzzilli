function f1() {
    return f1;
}
try {
    const v3 = new Uint32Array(4);
    Object.defineProperty(v3, "unitDisplay", { writable: true, enumerable: true, value: f1 });
    const v4 = class extends Uint32Array {
        constructor(a6) {
            super(v3);
            const v8 = [a6,v3];
            Reflect.apply(v3.toLocaleString, this, v8);
        }
    }
    new v4(4);
} catch(e12) {
}
