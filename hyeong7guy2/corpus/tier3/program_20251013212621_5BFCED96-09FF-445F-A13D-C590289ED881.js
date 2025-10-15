function f0(a1) {
    function F2(a4) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = [100,F2];
    v6.constructor = {};
    a1[1];
    return f0;
}
const v9 = {};
function f11() {
    return (64).constructor;
}
for (let v13 = 0; v13 < 50; v13++) {
    f11();
}
for (let i16 = 0; i16 < 20000; i16++) {
    v9[1] = 2;
    f0(v9);
}
