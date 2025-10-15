function f0(a1, a2, a3) {
    let v4 = 0;
    if (a3) {
        v4 = 4294967296;
    }
    for (let i7 = 0; i7 < 1; i7++) {
        const safe_index = v4 & 4294967295;
        a1[safe_index] = 3.3;
    }
    a2[v4] = 4.4;
    return f0;
}
for (let i19 = 0; i19 < 20000; i19++) {
    f0([1.1], []);
}
f0(1.1, [1.1,1.1,1.1,1.1], true);
