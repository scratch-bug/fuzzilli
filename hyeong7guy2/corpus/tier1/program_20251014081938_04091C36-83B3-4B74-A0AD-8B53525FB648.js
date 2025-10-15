function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
delete F0[1073741824];
const v4 = class extends Int32Array {
}
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
new F5();
for (let i12 = 0;
    i12 < 1000;
    (() => {
        i12++;
        const v28 = {
            p(a18, a19, a20, a21) {
                const v22 = async (a23, a24, a25) => {
                    await a18;
                };
                super.toString(Int32Array, v4);
            },
        };
        v28.p();
        function F30() {
            if (!new.target) { throw 'must be called with new'; }
            new Proxy(Int32Array, {});
            new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
        }
        new F30();
    })()) {
}
