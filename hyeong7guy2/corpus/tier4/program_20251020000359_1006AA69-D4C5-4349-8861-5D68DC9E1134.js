function f1() {
    return f1;
}
class C2 extends f1 {
    static {
        function f4() {
            async function* f5(a6, a7) {
                return 1073741824;
                yield* this;
                return f1;
            }
            f5(f5, f4);
            return this;
        }
        new Worker(f4, { type: "function" });
    }
}
