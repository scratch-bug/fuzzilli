function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -2147483647;
}
const v3 = new F0();
const v5 = new Map();
v5.toJSON = v3;
const v6 = /\ud808\udf45*/dsygmvi;
function f7(a8, a9) {
    const t9 = "🙌🏿";
    t9[2] = "🙌🏿";
    return a8;
}
v6[f7] = v5;
function f11(a12, a13) {
    return v6;
}
const v16 = [v6];
new Worker(f11, { arguments: v16, type: "function" });
