const v2 = class {
}
new v2();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new Proxy(Object, {});
const P = v11;
for (let i14 = 0; i14 < 25000; ++i14) {
    const v21 = {};
    new P();
    for (let v24 = 0; v24 < 5; v24++) {
        ++v24;
    }
}
