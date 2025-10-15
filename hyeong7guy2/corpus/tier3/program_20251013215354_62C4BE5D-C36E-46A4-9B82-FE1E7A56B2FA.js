class C1 {
    set f(a3) {
        this[2147483647] |= a3;
    }
}
const v4 = new C1();
for (const v6 of [v4,C1,-268435456,v4]) {
    v6.f = v6;
}
const v9 = new BigInt64Array(5);
v9.indexOf(C1);
