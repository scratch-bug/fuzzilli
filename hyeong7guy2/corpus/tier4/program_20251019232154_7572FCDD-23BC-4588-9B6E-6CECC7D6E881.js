const v0 = class {
}
function f1(a2, a3) {
    if (a3) {
        a3[0];
    }
    a2[0];
    return a3;
}
f1(f1, v0);
const v7 = [f1,f1,f1];
for (let i9 = 0; i9 < 25000; i9++) {
    v7[0] = 100;
    f1(v7);
}
