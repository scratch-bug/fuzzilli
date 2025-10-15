function f0() {
    return f0;
}
class C1 extends f0 {
}
function f2() {
    return C1;
}
class C3 {
    static {
        let v4 = this;
        function f5(a6, a7, a8) {
            function f10(a11) {
                return a7;
            }
            for (let v12 = 0; v12 < 5; v12++) {
                Object.defineProperty(a7, this, { set: f10 });
            }
            [f2,v4,f2] = a7;
            return f2;
        }
        try { f5(C1, f5); } catch (e) {}
        new Worker(f5, { type: "function" });
    }
}
gc();
