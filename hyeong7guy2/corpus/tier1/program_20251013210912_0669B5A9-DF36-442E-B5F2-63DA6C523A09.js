class C1 {
}
const v2 = new C1();
const v3 = {};
function f4(a5, a6) {
    a5.toISOString = a6;
}
for (let i8 = 0; i8 < 20000; i8++) {
    const v16 = i8 % 2 ? 2 : v3;
    f4(v16, {}, 0, C1, v2);
}
let victim = { a: 1.1 };
f4(victim, {});
