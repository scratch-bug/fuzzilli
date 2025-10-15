function f0() {
    return f0;
}
class C1 {
    static {
        let v2 = this;
        function f3(a4, a5, a6) {
            eval(a6);
            [f0,v2,f0] = a5;
            return f0;
        }
        new Worker(f3, { type: "function" });
    }
}
