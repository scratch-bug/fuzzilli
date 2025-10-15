let v0 = "customSections";
let v1 = true;
function f2(a3) {
    if (!v1) {
        v0 = 1;
    }
    return a3;
}
for (let i6 = 0; i6 < 20000; ++i6) {
    f2();
}
v1 = false;
