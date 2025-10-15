function f0(a1, a2) {
    Object.assign(a1, a2);
    a1.hasOwnProperty("p1");
}
for (let i8 = 0; i8 < 10000; i8++) {
    const v14 = { p0: i8 };
    const v15 = { p1: i8 };
    f0(v14);
}
const v17 = {};
const v20 = {
    get p0() {
    },
    p1: 2,
};
f0(v17, v20);
