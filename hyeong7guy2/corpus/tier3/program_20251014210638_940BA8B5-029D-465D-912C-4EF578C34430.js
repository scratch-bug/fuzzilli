class C0 {
}
function f1(a2) {
}
const v4 = [Symbol,Symbol];
v4[8] = Symbol;
for (let i6 = 0;
    i6 < 30000;
    (() => {
        const v10 = i6++;
        v10 / v10;
    })()) {
    v4.forEach(f1, C0);
}
