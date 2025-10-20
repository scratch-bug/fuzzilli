const v0 = [9,9223372036854775807,512,-16,-7];
for (let i2 = 0; i2 < 20000; i2++) {
    const v9 = new Set(v0);
    const v11 = [v0];
    Reflect.apply(v9.has, v9, v11);
}
