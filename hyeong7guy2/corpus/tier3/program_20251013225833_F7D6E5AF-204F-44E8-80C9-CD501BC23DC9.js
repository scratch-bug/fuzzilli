function f0() {
    return f0;
}
let v1 = -10780;
with (f0) {
    for (let i = 0; i < 5; i++) {
        v1 **= 0;
    }
}
