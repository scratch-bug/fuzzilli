const v1 = [Uint32Array,Uint32Array,Uint32Array,Uint32Array];
function f2() {
    const v5 = {
        get c() {
            v1.length = 0;
            return f2;
        },
    };
    const t8 = JSON.stringify;
    t8(v5);
    return Uint32Array;
}
Object.defineProperty(v1, 0, { configurable: true, get: f2 });
v1["indexOf"]();
