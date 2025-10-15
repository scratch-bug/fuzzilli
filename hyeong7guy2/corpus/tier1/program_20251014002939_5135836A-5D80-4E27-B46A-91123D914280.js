const v2 = {};
for (let v3 = 0; v3 < 50; v3++) {
    const v4 = {};
    let v6 = v3 % 2;
    const v7 = v6 | v6;
    const v8 = v6 ? v4 : v2;
    Float64Array.c = v6;
    try { new v8(); } catch (e) {}
    const v12 = {
        [Symbol]() {
            v6 = this;
        },
    };
    v12.d = v7;
}
