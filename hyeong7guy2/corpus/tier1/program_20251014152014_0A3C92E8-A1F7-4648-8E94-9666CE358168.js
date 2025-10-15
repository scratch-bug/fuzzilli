const v3 = new Int16Array(8);
class C4 {
    get g() {
        return -9223372036854775807;
    }
    get h() {
        return this;
    }
}
const v7 = new C4();
new Uint8Array(2562);
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a14;
    this.a = v3;
}
const v16 = new F11(2562, Int16Array, Uint8Array);
const v17 = new F11(2562, v16, Uint8Array);
new F11(8, v17, -9223372036854775807);
new F11(8, -9223372036854775807, 8);
new C4();
new C4();
const v22 = new C4();
[-3.7522510881241753e+307,-2.2250738585072014e-308,2.0,NaN,2.220446049250313e-16];
[-1.0,-1000000.0,0.0,0.7111700697502806,NaN,-1.7976931348623157e+308,0.545438546148766,-1.7976931348623157e+308];
const v25 = class extends C4 {
    static {
        try { new Int16Array(this, ...C4, this, this, C4, ...this); } catch (e) {}
    }
    static {
    }
    #valueOf(a30, a31, a32) {
        const t32 = "toLocaleString";
        delete t32[65536];
        v7.length = 1024;
        const v37 = {
            call: "toLocaleString",
            construct: Object,
            defineProperty: Object,
            deleteProperty: Object,
            get: Object,
            has: Object,
            preventExtensions: Object,
            setPrototypeOf: Object,
        };
        new Proxy(v22, v37);
    }
}
new v25();
class C43 {
}
("throw").split("¿h");
