gc();
for (let i4 = 0;
    i4 < 20000;
    (() => {
        i4++;
        0 in {};
    })()) {
}
class C13 {
}
const v16 = new Proxy(C13, {});
for (let v17 = 0; v17 < 50; v17++) {
    new v16();
}
