const v1 = new WeakSet();
const v2 = {};
function f3(a4, a5) {
}
for (let v6 = 0; v6 < 500; v6++) {
    const v7 = {};
    v6 % 2 ? v7 : v2;
    for (let v11 = 0; v11 < 32; v11++) {
        v1["p" + v11] = v11;
    }
    f3();
}
