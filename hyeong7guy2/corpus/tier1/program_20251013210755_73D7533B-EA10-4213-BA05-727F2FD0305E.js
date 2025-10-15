globalThis.obj = { a: 1.1 };
function f3(a4, a5) {
    a4.a = a5;
}
for (let i7 = 0; i7 < 10000; i7++) {
    f3(globalThis.obj, 1.1);
}
const t7 = globalThis.obj;
t7.b = 2.2;
const v18 = globalThis.obj;
f3(v18, { p: 1337 });
