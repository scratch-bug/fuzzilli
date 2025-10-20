function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        const v12 = new ArrayBuffer(2471, { maxByteLength: 1073741824 });
        const v14 = new Int16Array(v12);
        v14.fill(580);
        function f17() {
            return 2471;
        }
        WebAssembly.compileStreaming(v14, v4).catch(f17);
    }
}
new v4();
