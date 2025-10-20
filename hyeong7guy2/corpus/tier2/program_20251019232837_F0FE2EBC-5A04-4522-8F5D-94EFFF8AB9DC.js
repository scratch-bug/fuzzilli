const v1 = [-28740];
function f2(a3, a4) {
    function f5(a6) {
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f11() {
                function f12(a13) {
                    const v15 = Array.prototype;
                    return v15.push(v15);
                }
                return f12;
            }
            Object.defineProperty(this, "toString", { get: f11 });
        }
        const v17 = new F7(f2, 1);
        class C18 {
            static [v17](a20, a21, a22) {
            }
        }
        return 1;
    }
    a3.valueOf = f5;
    try { a3(v1); } catch (e) {}
    try { a3.indexOf(v1, a3); } catch (e) {}
    return f2;
}
f2(f2);
