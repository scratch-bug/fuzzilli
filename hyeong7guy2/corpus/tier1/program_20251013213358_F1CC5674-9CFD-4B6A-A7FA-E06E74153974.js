new Int16Array(512);
const v3 = /xyz{1,32}/i;
class C9 {
}
const v11 = {};
function f12(a13, a14) {
    if (false) {
    }
    const v15 = new a13();
    return v15;
}
const v17 = new Proxy(C9, { construct: f12 });
const P = v17;
function f19() {
}
function f22() {
    function f23(a24) {
        const v25 = { call: Array, defineProperty: f12, has: f12, isExtensible: f12 };
    }
    let v26;
    try { v26 = C9.getUTCDay(f19, v3); } catch (e) {}
    function* f27(a28, a29, a30, a31) {
        typeof a31 === "string";
        yield* [f23];
    }
    try { f27(v26); } catch (e) {}
}
new Worker(f22, { type: "function" });
for (let i42 = 0; i42 < 25000; ++i42) {
    f19();
}
