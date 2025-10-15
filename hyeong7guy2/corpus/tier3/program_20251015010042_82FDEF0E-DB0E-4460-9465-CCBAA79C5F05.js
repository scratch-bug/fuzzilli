for (let i2 = 0; i2 < 25000; ++i2) {
    const v8 = [i2,i2,i2,i2,i2];
    v8.push(v8, i2, v8, WeakSet, v8, WeakSet);
}
