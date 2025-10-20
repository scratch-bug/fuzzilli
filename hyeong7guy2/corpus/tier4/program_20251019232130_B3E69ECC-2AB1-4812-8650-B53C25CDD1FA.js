function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a7;
}
const v8 = new F2("1073741824", "1073741824", "NFKC", "NFKC");
for (let i10 = 0;
    i10 < 10000;
    (() => {
        const v14 = v8.h;
        v14 > v14;
        i10++;
    })()) {
}
