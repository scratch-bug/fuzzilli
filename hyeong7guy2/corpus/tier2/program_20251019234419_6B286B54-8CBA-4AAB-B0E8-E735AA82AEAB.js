function f1(a2, a3, a4, a5) {
    return a3;
}
const v8 = new Proxy(Int8Array, { ownKeys: f1 });
function f9(a10, a11, a12, a13) {
    let {...v14} = v8;
    return v14;
}
try { f9(); } catch (e) {}
