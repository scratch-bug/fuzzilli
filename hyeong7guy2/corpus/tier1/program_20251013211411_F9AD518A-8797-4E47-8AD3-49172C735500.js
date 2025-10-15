let v0 = true;
function f1(a2) {
    let v3 = undefined;
    if (v0) {
        v3 = 1;
    }
    v3 | 0;
    return a2;
}
for (let i8 = 0; i8 < 20000; ++i8) {
    f1(i8);
}
v0 = false;
