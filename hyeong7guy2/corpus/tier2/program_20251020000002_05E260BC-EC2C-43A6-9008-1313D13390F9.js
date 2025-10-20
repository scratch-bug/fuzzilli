[-5.0,-2.073795659103088,0.5541645838645571,-0.29212072569462855,-156211.99668663018];
const v1 = class {
    static set d(a3) {
    }
    #m() {
        return this;
    }
}
const v5 = new v1();
const v6 = new v1();
const v7 = new v1();
const v8 = new v1();
const v9 = /foo(?=bar)baz/umi;
new Uint8ClampedArray(255);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a19;
}
const v20 = new F14(v7, v7, v7, v7);
new F14(v8, v8, v20, v7);
function F23(a25) {
    if (!new.target) { throw 'must be called with new'; }
    class C27 {
        static get = "toISOString";
    }
}
const v28 = Symbol.iterator;
try { v28(); } catch (e) {}
new F14(v7, v8, v9, v5);
new F14(v8, v6, v5, v5);
function F33(a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    const v37 = this.constructor;
    typeof "NFC" === "function";
    function f41(a42, a43, a44, a45) {
        return "NFC";
    }
    f41(f41, v37, F33, "NFC");
    function f51() {
        return 750;
    }
    f51[Symbol.toPrimitive] = f51;
    class C53 extends f51 {
    }
    function f54() {
        return "NFC";
    }
    f54.shared = "NFC";
    f54.maximum = 2624;
    Object.defineProperty(f54, "initial", { value: C53 });
    const t50 = WebAssembly.Memory;
    const v57 = new t50(f54);
    v57.toResizableBuffer(F33, this, F33, f51);
    try { new v37(); } catch (e) {}
}
new F33();
