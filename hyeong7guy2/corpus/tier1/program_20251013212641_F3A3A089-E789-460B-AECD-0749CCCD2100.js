class C0 {
}
class C1 extends C0 {
}
const v2 = {};
v2["p"] = 0;
let v5 = false;
for (let i7 = 0; i7 < 25000; i7++) {
    const t8 = v5 ? v2 : {};
    t8.year = 1;
    if (i7 < 24998) {
        v5 = true;
    }
}
