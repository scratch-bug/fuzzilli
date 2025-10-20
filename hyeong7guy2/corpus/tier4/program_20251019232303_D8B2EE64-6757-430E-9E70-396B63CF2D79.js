function f0() {
}
const v1 = class extends f0 {
    [f0] = f0;
    constructor() {
        super();
        async function* f3(a4) {
            yield* [await a4,f0,f3,f3];
            return f3;
        }
        f3(f0);
    }
}
const v8 = new v1();
new v1();
new v1();
new Set();
function f14() {
    return v8;
}
new Map();
new BigUint64Array(222);
for (let i22 = 0; i22 < 20000; ++i22) {
    function f28(a29) {
    }
    +f28;
    function f31(a32, a33, a34) {
        return a33;
    }
}
const v35 = [1593228073];
const v40 = new ArrayBuffer(64, { maxByteLength: 65536 });
const v42 = new Uint32Array(v40);
v42.set(v35);
const t33 = Date.constructor;
t33(v42);
