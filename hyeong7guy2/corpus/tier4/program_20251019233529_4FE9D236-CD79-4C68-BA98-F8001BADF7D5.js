const v2 = Array(4015);
class C3 extends Array {
    constructor(a5, a6) {
        super();
        const v8 = new Uint8Array(v2);
        const v10 = WebAssembly.compile(v8);
        v10.catch(Array);
        function f12() {
            return a6;
        }
        WebAssembly.compileStreaming(v10, a6).catch(f12);
    }
}
new C3(C3, C3);
