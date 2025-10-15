function f0() {
    return f0;
}
let v1 = -10780;
v1--;
with (f0) {
    v1 **= 0;
}
