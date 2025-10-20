const v3 = [Uint32Array,Uint32Array,Uint32Array,Uint32Array];
function f4() {
    return 4;
}
Object.defineProperty(v3, 0, { configurable: true, get: f4 });
v3["indexOf"]("boolean", 4);
