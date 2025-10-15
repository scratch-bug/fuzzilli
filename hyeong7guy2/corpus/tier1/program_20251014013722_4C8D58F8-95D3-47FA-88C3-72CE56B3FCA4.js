function f0() {
}
class C1 {
}
class C2 {
}
class C3 {
}
const v4 = {};
function f5(a6, a7) {
    a6[Symbol.unscopables] = C1;
}
for (let v10 = 0; v10 < 250; v10++) {
    const v11 = {};
    const v14 = v10 % 2 ? v11 : v4;
    Symbol.toPrimitive;
    const v19 = {
        get g() {
            super.f = this;
        },
        get b() {
        },
    };
    f5(v14);
}
