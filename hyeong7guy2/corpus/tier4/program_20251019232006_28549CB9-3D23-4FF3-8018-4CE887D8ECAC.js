function f0() {
    return f0;
}
const v1 = class extends f0 {
}
try { v1.o(); } catch (e) {}
function f4() {
    with (d8) {
        var b = 129;
    }
    return v1;
}
