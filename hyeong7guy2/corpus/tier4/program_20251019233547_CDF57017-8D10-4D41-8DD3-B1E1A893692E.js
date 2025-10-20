function f0() {
    return f0;
}
const v1 = class extends f0 {
    constructor(a3, a4) {
        super();
        const v6 = [-1000.0,-Infinity,1000000000.0,-1000.0];
        Object.preventExtensions(Object);
        const v11 = Reflect.apply(v6.includes, Object, Float32Array);
        function f13() {
            return Reflect;
        }
        WebAssembly.compileStreaming(v6, v11).catch(f13);
    }
}
new v1();
