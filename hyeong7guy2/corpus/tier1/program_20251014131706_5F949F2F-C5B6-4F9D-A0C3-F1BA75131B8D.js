const v1 = {};
class C4 {
    static p(a6) {
    }
    static toString(a8) {
    }
}
const v9 = new C4();
[[v9],-5.211712515478351e+307,127];
function F12() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i16 = 0;
    i16 < 1000;
    (() => {
        i16++;
        const v31 = {
            p(a22, a23, a24, a25) {
                const v26 = async (a27, a28, a29) => {
                    await a22;
                };
            },
        };
        v31.p();
        function F34() {
            if (!new.target) { throw 'must be called with new'; }
            new Proxy(Int32Array, {});
            new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
        }
        new F34();
    })()) {
}
