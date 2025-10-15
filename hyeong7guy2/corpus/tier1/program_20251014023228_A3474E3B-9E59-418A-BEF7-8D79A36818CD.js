const v0 = [6.935184356500927e+307];
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v0;
}
const v6 = new F1();
function f7(a8) {
    return a8;
}
const v11 = [v6];
new Worker(f7, { arguments: v11, type: "function" });
