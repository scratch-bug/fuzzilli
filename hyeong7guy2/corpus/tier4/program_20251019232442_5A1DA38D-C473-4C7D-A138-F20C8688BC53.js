for (let i2 = 0, i3 = 10;
    i3;
    (() => {
        i3--;
        const v9 = { maxByteLength: 229 };
        let v10 = 1;
        v10++;
        const v12 = new SharedArrayBuffer(v10, v9);
        const v14 = new Uint8ClampedArray(v12);
        const t6 = v14.constructor;
        new t6(v14);
    })()) {
}
