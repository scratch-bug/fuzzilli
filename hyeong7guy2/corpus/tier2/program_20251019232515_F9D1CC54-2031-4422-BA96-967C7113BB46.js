async function f1(a2, a3) {
    const v4 = Symbol.asyncDispose;
    function f5() {
        return a2;
    }
    const v6 = { f: f5 };
    const v8 = {
        [v4]() {
        },
    };
    await using v9 = v8;
    return v8;
}
f1();
const v12 = new Int8Array();
for (let v13 = 0; v13 < 100; v13++) {
    f1(Int8Array, v13);
}
function f15(a16) {
    const v19 = { execution: "async" };
    for (let i21 = 0; i21 < 25000; ++i21) {
        ([i21,i21]).push(1.1);
    }
    gc(v19);
    return a16;
}
Object.defineProperty(v12, "valueOf", { configurable: true, enumerable: true, value: f15 });
v12[8] = v12;
