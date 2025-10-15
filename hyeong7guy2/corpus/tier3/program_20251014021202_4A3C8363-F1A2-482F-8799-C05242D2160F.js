const v0 = [5938];
function f1(a2, a3) {
    return a2;
}
v0.constructor = f1;
function f4(a5) {
    return f1;
}
v0[Symbol] = f4;
function f7(a8, a9) {
    return a8.at();
}
f7(v0);
const v12 = [f7];
v12.constructor = {};
f7(v12);
