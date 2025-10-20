class C0 {
}
const v3 = {
    set d(a2) {
    },
};
for (let i5 = 0; i5 < 20000; i5++) {
    const v12 = { a: 1 };
    const v15 = i5 % 2 ? v12 : v3;
    v15.a = {};
}
new C0();
