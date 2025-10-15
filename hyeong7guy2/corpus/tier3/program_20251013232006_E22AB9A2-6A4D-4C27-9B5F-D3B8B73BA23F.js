class C0 {
}
const v1 = class extends C0 {
}
function f2(a3) {
    new Array(v1);
    return a3;
}
for (let i7 = 0; i7 < 20000; i7++) {
    f2(i7);
}
