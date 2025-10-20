function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        const v10 = { alphabet: "base64url" };
        const v12 = new Uint8Array(224);
        v12.setFromBase64("J9AiBSOaF9U60RcQB_3fH7N7w9YyEspsESXF4u4w5KbUWxgTsgL6_trgq-sNmk1F6TQevNEsGxIPXkYKw8RWMg8LNNBu6fhmK1NDY1trWaspfLfyMgO-M1I=", v10);
        function f15() {
            return WebAssembly;
        }
        WebAssembly.compileStreaming(Uint8Array, a5).catch(f15);
    }
}
new v3(F0, F0);
