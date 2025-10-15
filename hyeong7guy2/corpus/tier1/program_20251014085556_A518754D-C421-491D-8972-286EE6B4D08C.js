class C1 extends Uint32Array {
    constructor(a3, a4) {
        super();
        const v7 = new Date();
        for (let i9 = 0;
            i9 < 10000;
            (() => {
                ++i9;
                v7.b ^= 1073741824;
            })()) {
        }
    }
}
new C1();
