const v1 = [-28740];
function f2(a3, a4) {
    function f5(a6) {
        return 1;
    }
    a3.valueOf = f5;
    try { a3(v1); } catch (e) {}
    try { a3.indexOf(v1, a3); } catch (e) {}
    return v1;
}
f2(f2);
