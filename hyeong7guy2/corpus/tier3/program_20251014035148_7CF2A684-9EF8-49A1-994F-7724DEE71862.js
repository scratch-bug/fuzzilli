class C3 {
    constructor(a5) {
        async function f6(a7) {
            return await "with";
        }
        f6(f6);
    }
}
const v10 = new C3(C3);
const v11 = new C3(NaN);
const v12 = new C3(v10);
const v15 = new WeakMap();
class C16 {
    static n(a18, a19, a20) {
        const v21 = { d: C3 };
        v11[Symbol.asyncIterator] = v15;
        delete this[a18];
        return a20;
    }
}
new C16();
const v27 = new C16();
function F28(a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    new Proxy(this, {});
    [v27,a32];
    this.c = a32;
}
new F28(v12, v12, v10);
for (let v39 = 0; v39 < 100; v39++) {
    const v40 = %WasmArray();
    v40[4];
    const v42 = v39 | v39;
    const v44 = {
        [Symbol]() {
            v39 = this;
        },
    };
    v39 instanceof F28;
    v44.h;
    with (Object) {
        v27[Symbol.split];
    }
    typeof v44;
    function f55() {
        return {};
    }
    Uint8Array.of(176, 26, 100, 59);
    const v63 = async (a64, a65, a66) => {
        const v69 = SharedArrayBuffer.prototype.grow;
        try { v69.call(v40, v42); } catch (e) {}
    };
}
