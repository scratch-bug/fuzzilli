class C2 extends Set {
    constructor(a4, a5) {
        super();
        const v10 = new ArrayBuffer(11510, { maxByteLength: 1073741824 });
        const v12 = new Int16Array(v10);
        const v13 = v12.fill(580);
        function f15() {
            return v13;
        }
        WebAssembly.compileStreaming(WebAssembly, a5).catch(f15);
    }
}
new C2(Set, C2);
