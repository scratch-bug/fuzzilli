class C1 extends Uint32Array {
    static {
        function f3(a4, a5) {
            typeof this === "bigint";
            return a4;
        }
        new Worker(f3, { type: "function" });
    }
}
