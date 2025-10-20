let v0 = 0;
class C1 {
    static {
        for (let i4 = 16;
            i4 < 10000;
            (() => {
                const v8 = i4++;
                const v15 = {
                    p(a10, a11, a12, a13) {
                        return ++v0;
                    },
                };
                v15.p(v0, v0, v8, v15);
            })()) {
        }
    }
}
const v18 = new C1();
const v19 = v18.constructor;
function f20() {
    return v0;
}
const t22 = f20.constructor;
const t23 = t22(v19);
t23();
