const v1 = [Uint32Array,Uint32Array,Uint32Array,Uint32Array];
function f2() {
    return Uint32Array;
}
Object.defineProperty(v1, 0, { configurable: true, get: f2 });
v1["indexOf"]();
