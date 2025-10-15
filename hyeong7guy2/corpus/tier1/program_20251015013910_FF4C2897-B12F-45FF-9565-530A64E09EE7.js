const v0 = [];
function f2() {
    return Reflect;
}
v0[7] = Reflect;
for (let i4 = 0;
    i4 < 20000;
    (() => {
        v0.reduceRight(f2, i4++);
        const v10 = {};
    })()) {
}
