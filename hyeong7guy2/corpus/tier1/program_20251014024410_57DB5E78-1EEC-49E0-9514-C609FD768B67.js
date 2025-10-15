class C0 {
}
class C1 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = C1;
    function f6(a7, a8, a9) {
        function f11(a12) {
            a12 << -2114862671;
            return F2;
        }
        this.onmessage = f11;
        return F2;
    }
    const v17 = [C0,this];
    new Worker(f6, { arguments: v17, type: "function" });
}
class C20 extends F2 {
}
new C20();
