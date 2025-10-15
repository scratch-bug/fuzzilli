function* f0(a1, a2) {
    return a2;
}
const v3 = f0(f0, f0);
for (let v4 = 0; v4 < 32; v4++) {
    v3["p" + v4] = v4;
}
