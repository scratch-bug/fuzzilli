const v1 = [-1000000.0,-1.7976931348623157e+308,2.0,1.0200597231667099e+307];
const v2 = [1000.0,1.292001322501545e+308,-1.0,-1e-15,0.7346958701003952,NaN];
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F3(v2);
function f8(a9) {
    function F10(a12) {
        if (!new.target) { throw 'must be called with new'; }
        const v13 = this.constructor;
        try { new v13(this); } catch (e) {}
        ~a12;
    }
    new F10();
}
Object.defineProperty(Symbol, Symbol.toPrimitive, { configurable: true, enumerable: true, set: f8 });
for (let v19 = 0; v19 < 5; v19++) {
    Symbol[Symbol.toPrimitive] = Symbol;
}
const v23 = String.prototype;
function F24() {
    if (!new.target) { throw 'must be called with new'; }
}
const v26 = new F24();
function f28(a29) {
}
for (let v31 = 0; v31 < 1000; v31++) {
    v31 < 20000;
    f28(v31, v26);
    ++v31;
}
const v37 = new Uint32Array(2671);
[v37,"t3enA",v6,v1];
const v43 = class {
}
Object.defineProperty(v43, "toJSON", { configurable: true, value: v23 });
for (let i45 = 0; i45; ++i45) {
}
function F57() {
    if (!new.target) { throw 'must be called with new'; }
}
F57.toISOString = v6;
function f84(a85, a86, a87) {
    function f89(a90) {
        Uint8Array[Array] &&= a90;
        const v93 = { maxByteLength: 1556 };
        function f95(a96) {
            return a96;
        }
        const v97 = class extends f95 {
        }
        return Uint8Array;
    }
    this.onmessage = f89;
    v43.b;
    var f = 0;
    delete v43?.d;
    void f;
    v43.e;
    for (let i106 = 0; i106 < 1;) {
    }
    return f;
}
const v113 = [v43,"function",7];
const v114 = { arguments: v113, type: "function" };
v114.flushDenormals = v114;
new Worker(f84, v114);
