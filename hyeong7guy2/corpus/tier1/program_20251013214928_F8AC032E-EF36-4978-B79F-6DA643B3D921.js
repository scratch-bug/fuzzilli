function f0() {
}
class C1 {
}
const v2 = new C1();
const v3 = {};
function f4(a5, a6) {
}
for (let v7 = 0; v7 < 50; v7++) {
    const v8 = {};
    v3.b = v8;
    const v9 = v7 ? v8 : v3;
    try { v9(); } catch (e) {}
    const v13 = {
        [Symbol]() {
            v7 = this;
        },
    };
    v2[f0] = v9;
    let v14 = f4.bind(v9, v2);
}
