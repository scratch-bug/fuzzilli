try {
    const v2 = new Uint32Array(4);
    Object.defineProperty(v2, "numberingSystem", { writable: true, enumerable: true, value: v2 });
    const v3 = class extends Uint32Array {
        constructor(a5) {
            super(v2);
            const v7 = [a5,v2];
            Reflect.apply(v2.toLocaleString, this, v7);
        }
    }
    new v3();
} catch(e11) {
}
