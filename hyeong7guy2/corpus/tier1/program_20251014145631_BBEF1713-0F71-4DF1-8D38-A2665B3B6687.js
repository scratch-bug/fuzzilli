function f0() {
    return f0;
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7() {
    return "🙌🏿";
}
function f9() {
    return F1;
}
class C10 extends f9 {
}
const v14 = [C10,`unit${F1}bigint`];
new Worker(f0, { arguments: v14, type: "function" });
