const v1 = [9,9223372036854775807,512,-16,-7];
for (let i3 = 0; i3 < 20000; i3++) {
    const v10 = new Set(v1);
    const v12 = [];
    Reflect.apply(v10.has, v10, v12);
}
