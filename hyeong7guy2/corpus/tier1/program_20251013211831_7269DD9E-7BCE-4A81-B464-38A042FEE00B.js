function f0(a1, a2) {
    a1.push(...a2);
}
for (let i5 = 0; i5 < 20000; ++i5) {
    f0([1.1,2.2], [3.3,4.4]);
}
const v18 = {};
