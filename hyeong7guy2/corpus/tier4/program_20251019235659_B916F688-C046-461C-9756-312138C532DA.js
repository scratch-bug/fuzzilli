for (let i2 = 0; i2 < 10000; ++i2) {
    const v8 = 2217 << i2;
    let v9 = v8 - v8;
    let v10 = v9++;
    v10--;
    let v12 = v10--;
    v12++;
}
