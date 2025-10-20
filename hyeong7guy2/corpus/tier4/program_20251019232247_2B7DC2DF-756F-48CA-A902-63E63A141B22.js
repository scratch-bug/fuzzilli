async function* f0(a1, a2, a3) {
    return f0;
}
const v4 = f0(f0, f0, f0);
for (let v5 = 0; v5 < 32; v5++) {
    v4["p" + v5] = v5;
}
