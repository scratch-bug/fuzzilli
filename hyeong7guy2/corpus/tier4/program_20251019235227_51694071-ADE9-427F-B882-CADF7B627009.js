const v1 = [-28740];
v1[0] = v1;
function f2(a3, a4) {
    function f5(a6) {
        return 1;
    }
    a3.valueOf = f5;
    try { a3(v1); } catch (e) {}
    try { a3.indexOf(v1, a3); } catch (e) {}
    return 1;
}
f2(f2);
