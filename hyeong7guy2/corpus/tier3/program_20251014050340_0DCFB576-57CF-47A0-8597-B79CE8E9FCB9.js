class C1 extends Map {
}
const v2 = new C1();
for (let i4 = 0;
    i4 < 20000;
    (() => {
        ++i4;
        const v10 = v2["get"](v2);
        v10 ?? v10;
    })()) {
}
