function f0() {
}
Object.defineProperty(f0, "toString", { configurable: true, value: f0 });
class C3 {
}
C3.g += -9223372036854775807;
const v5 = {
    get a() {
        return this;
    },
};
function f6(a7, a8) {
    a7.a = a8;
    return 0.7352659747889693;
}
for (let v9 = 0; v9 < 250; v9++) {
    const v10 = {};
    v10.a = C3;
    let v12 = v9 % 2;
    const v13 = v12 ? v10 : v5;
    Object.defineProperty(v13, "a", { value: 0.7352659747889693 });
    const v15 = Symbol.toPrimitive;
    const v17 = {
        [v15]() {
            v12 = this;
        },
    };
    C3[f0] = f6(v13);
    let v19 = f6.bind();
    new Uint16Array(v13);
}
