new BigInt64Array(9);
const v6 = /c[xyz]/mus;
class C7 {
}
const v8 = new C7();
const v9 = new C7();
const v11 = {};
new Uint16Array();
function f17(a18, a19) {
    Reflect.construct(a19, [a18]);
    v6[-1] = v8;
    Symbol.asyncIterator;
    let v25 = 0;
    while (v25 < 2) {
        v25++;
    }
}
const v36 = {
    construct(a30, a31) {
        const t0 = a31[0];
        t0[0] = 1.1;
        return Reflect.construct(a30, a31, a30);
    },
};
const handler = v36;
function f39() {
}
const v40 = new Proxy(f39, handler);
const proxy = v40;
for (let i43 = 0; i43 < 25000; i43++) {
    f17([1,2], proxy);
}
const v56 = [1,2];
("bigint").length;
function f58(a59, a60, a61, a62) {
}
f58(v40, v9, C7);
f17(v56, proxy);
