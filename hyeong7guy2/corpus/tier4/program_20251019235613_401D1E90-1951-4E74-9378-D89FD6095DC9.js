try {
    const v3 = new Uint32Array(4);
    v3.useGrouping = -5.0;
    const v4 = class extends Uint32Array {
        constructor(a6) {
            super(v3);
            const v8 = [a6,v3];
            Reflect.apply(v3.toLocaleString, this, v8);
        }
    }
    new v4(v4);
} catch(e12) {
}
