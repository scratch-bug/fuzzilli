new Set();
function f2(a3) {
    let v4 = 0;
    const v7 = 2 ** 32;
    const v10 = new Uint8Array(8);
    for (let v11 = 0; v11 < 5; v11++) {
        v10[v4 = v7] = 1;
    }
}
for (let i14 = 0; i14 < 25000; i14++) {
    f2();
}
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
}
class C28 extends Date {
}
