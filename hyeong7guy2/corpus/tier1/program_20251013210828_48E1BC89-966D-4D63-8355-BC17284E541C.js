const v1 = {
    get a() {
    },
};
const v3 = Object.create(v1);
function f4(a5, a6) {
    a5.a = a6;
}
for (let i8 = 0; i8 < 20000; i8++) {
    const v15 = { a: 1 };
    const v18 = i8 % 2 ? v15 : v3;
    f4(v18, {});
}
let victim = { a: 1.1, b: 2.2 };
f4(victim, {});
