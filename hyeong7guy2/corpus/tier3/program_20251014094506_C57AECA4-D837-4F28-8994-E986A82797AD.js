async function f0() {
    const v1 = {};
    const v2 = {};
    for (let i4 = 0;
        i4 < 20000;
        (() => {
            const v8 = i4++;
            let v9 = v8 >> v8;
            v9++;
        })()) {
    }
    for (let v12 = 0; v12 < 5; v12++) {
    }
    const v13 = {};
    return f0;
}
f0();
