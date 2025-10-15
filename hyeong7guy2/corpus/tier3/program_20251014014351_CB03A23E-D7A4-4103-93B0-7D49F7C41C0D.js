const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F1 {
}
class C4 {
}
for (let v6 = 0; v6 < 50; v6++) {
    const v7 = v6 - v6;
    const v8 = %WasmArray();
    const v9 = v0[4];
    function f10(a11, a12, a13, a14) {
        v8.g = a11;
        a13.b = v7;
        return a13;
    }
    try { f10(C3, C3, C3); } catch (e) {}
    const v16 = async (a17, a18, a19) => {
        await v9;
        return C4;
    };
    v9 | v6;
    const v23 = {
        [Symbol]() {
            v6 = this;
        },
    };
}
