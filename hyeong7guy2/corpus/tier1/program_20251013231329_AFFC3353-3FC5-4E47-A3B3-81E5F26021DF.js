function f0() {
}
class C1 {
}
const v2 = {};
for (let v3 = 0; v3 < 50; v3++) {
    const v4 = {};
    v4.c = v4;
    v4.b = v4;
    let v6 = v3 % 2;
    v6 | v6;
    const v8 = v6 ? v4 : v2;
    v8.c = v6;
    v8.c = v8;
    try { new v8(); } catch (e) {}
    const v12 = {
        [Symbol]() {
            v6 = this;
        },
    };
    v12.d = v3;
    v12.d = v12;
    C1[f0] = v8;
}
