let v0 = "valueOf";
class C3 {
    set g(a5) {
        v0 -= v0;
    }
    constructor(a7, a8) {
    }
}
const v9 = new C3(v0, v0);
const v10 = new C3(-5.0, 1e-15);
const v11 = new C3(v9, v9);
const v12 = new C3(v10, C3);
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a15;
    this.c = a16;
}
new F13(v12, v12, v10);
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a22;
    this.g = a23;
    this.f = 1e-15;
}
const v24 = new F20(v12, v12);
const v25 = new F20(v12, v10);
new F20(v25, v12);
new F20(v24, v11);
const v28 = [-65536,1073741824,512,12];
function f34(a35) {
    for (let i38 = 0; i38 < 20000;) {
    }
    return Uint8ClampedArray;
}
const v45 = { type: "function" };
Object.defineProperty(v45, "arguments", { writable: true, enumerable: true, value: v28 });
new Worker(f34, v45);
for (let i48 = 0;
    (() => {
        let v49 = 20000;
        v49--;
        return i48 < v49;
    })();
    (() => {
        const v53 = i48 + i48;
        for (let i55 = 0; i55 < 0; i55++) {
            const v61 = async (a62, a63, a64, a65) => {
                return await v53;
            };
        }
        i48++;
    })()) {
}
