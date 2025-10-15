function trigger() {
    const o = {};
    for (let i = 0; i < 1024; i++) {
        o['p' + i] = i;
    }
    const buffer = serialize(o);
    deserialize(buffer);
}

for (let i = 0; i < 100; i++) {
    try {
        trigger();
    } catch (e) {}
}

trigger();