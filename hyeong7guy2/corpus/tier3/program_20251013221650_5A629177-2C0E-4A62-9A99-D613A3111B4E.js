function f0() {
    return f0;
}
class C1 {
    static {
        let v2 = this;
        function f3(a4, a5, a6) {
            function f8(a9) {
                return f3;
            }
            this.onmessage = f8;
            Object.defineProperty(a5, this, { set: f8 });
            Reflect.construct();
            [f0,v2,f0] = a5;
            return a5;
        }
        const v15 = new Worker(f3, { type: "function" });
        const v16 = v15.constructor;
        try { v16(); } catch (e) {}
    }
}
