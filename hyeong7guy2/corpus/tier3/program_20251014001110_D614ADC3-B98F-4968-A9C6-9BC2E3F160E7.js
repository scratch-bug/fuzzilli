class C1 {
}
for (let i4 = 0;
    i4 < 20000;
    (() => {
        const v8 = i4++;
        v8 >> v8;
    })()) {
    const v11 = {};
    const v13 = i4 % 2;
    const t10 = [v13];
    t10[Symbol.dispose] = C1;
    v13 ? v11 : Object;
}
