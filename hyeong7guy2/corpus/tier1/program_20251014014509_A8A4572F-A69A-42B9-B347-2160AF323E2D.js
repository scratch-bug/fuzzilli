const v0 = class {
    n() {
        function f2(a3, a4) {
            function f5(a6) {
                ({"f":a6,} = this);
                return v0;
            }
            return f5;
        }
        const v9 = ["function",this];
        new Worker(f2, { arguments: v9, type: "function" });
    }
}
const v12 = new v0();
v12.n();
