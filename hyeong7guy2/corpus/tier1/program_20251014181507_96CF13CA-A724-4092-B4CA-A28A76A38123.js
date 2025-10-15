function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0(F0);
function f4(a5, a6) {
    return F0;
}
v3[f4] = f4 !== v3;
function f8(a9, a10) {
    return a9;
}
const v13 = [v3];
new Worker(f8, { arguments: v13, type: "function" });
