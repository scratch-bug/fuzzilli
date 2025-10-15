function f0(a1, a2) {
    a1[0];
    new a2();
    if (a1[0] === 1.1) {
        a1[0] = 2;
    }
}
let v9 = [];
v9[0] = 1.1;
function f11() {
    return f0;
}
const dummy = f11;
for (let i14 = 0; i14 < 30000; i14++) {
    f0(v9, dummy);
    v9 = 1;
}
for (let v22 = 0; v22 < 5; v22++) {
}
