function poc() {
    const o = {};
    for (let i = 0; i < 256; i++) {
        o['p' + i] = i;
    }
    try {
        structuredClone(o);
    } catch (e) {
    }
}

for (let i = 0; i < 100; i++) {
    poc();
}

poc();