function poc() {
    const obj = {};
    for (let i = 0; i < 2048; ++i) {
        obj['prop' + i] = i;
    }
    try {
        structuredClone(obj);
    } catch (e) {}
}

for (let i = 0; i < 100; ++i) {
    poc();
}

poc();