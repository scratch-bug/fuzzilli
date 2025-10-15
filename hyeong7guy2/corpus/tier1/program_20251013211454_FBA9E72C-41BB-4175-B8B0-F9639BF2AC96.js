let v0 = true;
function f1(a2) {
    if (v0) {
    }
    return a2;
}
for (let i4 = 0; i4 < 20000; ++i4) {
    f1();
    ++i4;
    function f12(a13) {
    }
    for (let i15 = 0; i15 < 20000; ++i15) {
        f12();
    }
}
v0 = false;
