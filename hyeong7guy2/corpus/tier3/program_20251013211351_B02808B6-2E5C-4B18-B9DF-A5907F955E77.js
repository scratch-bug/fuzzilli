const v1 = {
    get a() {
    },
};
function f2(a3, a4) {
    a3.a = a4;
    return a4;
}
for (let v5 = 0; v5 < 1000; v5++) {
    const v6 = {};
    f2(v5 % 2 ? v6 : v1);
}
const v11 = class {
}
