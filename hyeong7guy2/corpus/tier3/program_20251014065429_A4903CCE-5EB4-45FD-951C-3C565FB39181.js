function f0(a1, a2) {
    a1[0];
    const v4 = [a1];
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v9 = F5.length;
    const t7 = Array(v9);
    t7[4] = v9;
    return v4;
}
for (let i13 = 0; i13 < 25000; i13++) {
    f0([1,2]);
}
[f0,f0,f0];
