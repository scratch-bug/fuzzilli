const v1 = /c[xyz]/mus;
class C2 {
    [-35586](a4, a5) {
        return a5 = a4;
    }
    #e = v1;
}
const v6 = new C2();
const v7 = new C2();
const v8 = new C2();
const v13 = new SharedArrayBuffer(86, { maxByteLength: 536870887 });
new Uint16Array(v13);
new Uint16Array(9);
function f20(a21, a22) {
    a21[0];
    Reflect.construct(a22, [a21]);
    const v29 = a21[0] + 1;
    v1[-1] = v6;
    C2[Symbol.asyncIterator];
    let v33 = 0;
    while (v33 < 2) {
        v33++;
    }
    return v29;
}
const v44 = {
    construct(a38, a39) {
        const t0 = a39[0];
        t0[0] = 1.1;
        return Reflect.construct(a38, a39, a38);
    },
};
const handler = v44;
function f47() {
}
const v48 = new Proxy(f47, handler);
const proxy = v48;
for (let i51 = 0; i51 < 25000; i51++) {
    f20([1,2], proxy);
}
const v64 = [1,2];
new Map();
("bigint").length;
function f68(a69, a70, a71, a72) {
    const v81 = {
        p(a74, a75) {
            ("function").normalize("NFD");
            try { a70.log2(v44, "bigint", a74, f20); } catch (e) {}
        },
    };
    return v81;
}
f68(proxy, v6, v8, Uint16Array);
f68(v8, v7, proxy, f68(v7, proxy, v48, f68(v48, v7, v8, 1)));
f68(proxy, v7, v6, f68);
f20(v64, proxy);
