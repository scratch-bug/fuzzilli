class C1 {
}
new C1();
function f4(a5, a6) {
    a5.toISOString = a6;
    return f4;
}
for (let i8 = 0;
    i8 < 20000;
    (() => {
        i8++;
        new Uint16Array();
    })()) {
    const v16 = {};
    const v19 = i8 % 2 ? v16 : Object;
    f4(v19, {}, 0, C1);
}
