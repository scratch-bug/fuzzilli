class C3 {
    static valueOf(a5, a6) {
        try { a6.valueOf(4); } catch (e) {}
        return -536870912;
    }
    c;
}
const v8 = new C3();
try { v8.constructor(); } catch (e) {}
const v10 = new C3();
v10.c = v10;
const v11 = new C3();
v11.c = v11;
new Int8Array(255);
new Float64Array(5);
const v19 = class extends Float64Array {
    get g() {
        return 4 > this ? 4 : this;
    }
}
const v23 = new v19();
try { v23.reverse(); } catch (e) {}
new v19();
const v28 = class {
}
const v29 = v28?.constructor;
try { new v29(Int8Array); } catch (e) {}
for (let v31 = 0; v31 < 100; v31++) {
    let v33;
    try { v33 = WebAssembly.Exception(v31, WebAssembly); } catch (e) {}
    v33 ?? v33;
    const v36 = Math.asinh(v31);
    v36 & v36;
    const v38 = class {
        static [v28] = WebAssembly;
    }
    try { v38.call(4294967297n); } catch (e) {}
}
