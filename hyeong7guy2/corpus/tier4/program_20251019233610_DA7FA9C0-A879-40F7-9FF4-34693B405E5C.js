for (let i2 = 0;
    i2 < 1000;
    (() => {
        i2++;
        function F7() {
            if (!new.target) { throw 'must be called with new'; }
            new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
        }
        new F7();
    })()) {
}
let v16 = 10;
for (; v16--;) {
}
Uint8Array.of(133, 244).toHex();
class C23 extends Set {
}
new C23();
for (let v25 = 0; v25 < 25; v25++) {
}
const v26 = class {
    static {
        eval("");
    }
}
