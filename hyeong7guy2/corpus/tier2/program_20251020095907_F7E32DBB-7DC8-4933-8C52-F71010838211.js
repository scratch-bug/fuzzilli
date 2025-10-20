for (let i2 = 0, i3 = 10;
    i3;
    (() => {
        i3--;
        const v11 = new SharedArrayBuffer(1, { maxByteLength: 229 });
        const v13 = new Uint8ClampedArray(v11);
        const t3 = v13.constructor;
        new t3(v13);
    })()) {
}
