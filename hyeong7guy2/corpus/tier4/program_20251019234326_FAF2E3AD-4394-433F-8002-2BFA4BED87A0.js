const v0 = class {
    static {
        function f2() {
            const v4 = class extends {} {
                constructor(a6, a7, a8, a9) {
                    super(a9, this);
                }
            }
            return v0;
        }
        new Worker(f2, { type: "function" });
    }
}
