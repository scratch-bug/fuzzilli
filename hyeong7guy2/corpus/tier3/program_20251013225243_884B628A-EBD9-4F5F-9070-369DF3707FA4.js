const v0 = class {
}
for (let i2 = 0;
    (() => {
        function f3(a4, a5) {
        }
        return i2 < 20000;
    })();
    i2++) {
}
for (let i12 = 0; i12 < 20000; ++i12) {
}
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        v0();
    } catch(e23) {
        function f24(a25, a26) {
        }
        for (let i28 = 0; i28 < 100000; i28++) {
            const v34 = {};
            f24();
        }
    }
}
new F18();
gc();
