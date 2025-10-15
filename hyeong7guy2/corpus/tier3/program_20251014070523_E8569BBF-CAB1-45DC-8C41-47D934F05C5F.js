function f0(a1) {
    for (let v2 = 0; v2 < 25; v2++) {
    }
    a1.bind(null, ...{});
    return null;
}
new Worker(f0, { type: "function" });
for (let i11 = 0;
    i11 < 20000;
    (() => {
        const v15 = i11++;
        v15 / v15;
    })()) {
}
