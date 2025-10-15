const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v0;
}
const v3 = new F1();
function f4() {
    return v3;
}
class C5 extends F1 {
    static e = f4;
}
new C5();
new C5();
new C5();
const v10 = [-7];
class C11 {
}
C11[1073741825] = v10;
for (let v13 = 0; v13 < 100; v13++) {
    const v14 = %WasmArray();
    const v15 = v14?.[4];
    f4();
    const v19 = async (a20, a21, a22) => {
        await v15;
    };
    v13 | v13;
    const v26 = {
        [Symbol]() {
            v13 = this;
        },
    };
}
