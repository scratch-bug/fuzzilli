function f0(a1) {
    a1.z = 1;
    return 1;
}
const v3 = {};
v3["p"] = 0;
let v6 = false;
for (let i8 = 0; i8 < 25000; i8++) {
    f0(v6 ? v3 : {});
    if (i8 === 24998) {
        v6 = true;
    }
}
