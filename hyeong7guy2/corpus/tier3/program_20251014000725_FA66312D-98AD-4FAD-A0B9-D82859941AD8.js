class C0 {
}
const v2 = class extends C0 {
    static #toString(a4, a5, a6, a7) {
        async function* f8(a9, a10, a11) {
            [a9,a10,this,yield,-1000000.0];
        }
    }
}
try {
const t0 = "sort";
t0(-1000000.0, C0, -1000000.0, -1000000.0);
} catch (e) {}
