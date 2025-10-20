let v0 = 0;
class C1 {
    static {
        for (let i4 = 0;
            i4 < 1000;
            (() => {
                i4++;
                const v15 = {
                    p(a10, a11, a12, a13) {
                        ++v0;
                    },
                };
                v15.p();
            })()) {
        }
    }
}
const v18 = new C1();
const v19 = v18.constructor;
function f20() {
}
const t21 = f20.constructor;
const t22 = t21(v19);
t22();
