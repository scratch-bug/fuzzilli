class C1 {
}
function f2(a3, a4) {
    for (let i6 = 0;
        i6 < 10000;
        (() => {
            const v10 = a3 === "hX5";
            [v10,v10];
            i6++;
        })()) {
    }
    return C1;
}
Object.defineProperty(C1, "constructor", { writable: true, enumerable: true, value: f2 });
const t14 = C1.constructor;
t14();
