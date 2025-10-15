class C0 {
}
const v1 = new C0();
const v2 = [0.0,-3.0,-1000000.0,-Infinity];
for (let i4 = 0; i4 < 20000; i4++) {
    v2[1] = v1;
    Array(v2[1]);
}
