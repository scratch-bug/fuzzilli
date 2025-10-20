function f0(a1, a2, a3) {
    let v4 = 257;
    for (let i6 = 0; i6 < 25000; ++i6) {
        let v12 = 4.4;
        for (let v13 = 0; v13 < 5; v13++) {
            v4 >> 1;
            v4 = v12;
            ++v12;
        }
    }
    return f0;
}
f0.call();
