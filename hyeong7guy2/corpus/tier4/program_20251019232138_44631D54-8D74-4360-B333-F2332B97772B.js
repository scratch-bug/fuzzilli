class C0 {
}
const v1 = new C0();
for (let i3 = 0;
    i3 < 1000;
    (() => {
        i3++;
        function F8() {
            if (!new.target) { throw 'must be called with new'; }
            new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
        }
        new F8();
    })()) {
}
for (let v17 = 0; v17 < 25; v17++) {
    v17 < 20000;
}
class C20 {
}
const v26 = {
    [C20](a22, a23, a24, a25) {
    },
    ...v1,
};
