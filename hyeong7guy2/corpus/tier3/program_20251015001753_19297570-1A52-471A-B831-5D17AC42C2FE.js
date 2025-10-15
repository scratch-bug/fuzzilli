const v1 = new Int8Array();
for (let i3 = 0; i3 < 25000; ++i3) {
    let v9 = 0;
    for (let i = 0; i < 5; i++) {
        v1[v9] **= v9++;
    }
}
