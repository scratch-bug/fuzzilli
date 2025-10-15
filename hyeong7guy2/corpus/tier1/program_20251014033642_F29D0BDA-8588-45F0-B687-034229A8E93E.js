const v1 = {};
function f2(a3, a4) {
    a3.constructor;
}
for (let v6 = 0; v6 < 25; v6++) {
    v6.constructor = f2;
    const v8 = v6 ? 1073741823 : v1;
    v8.g;
    f2(v8);
    function f11() {
    }
    try { f2.apply(); } catch (e) {}
}
