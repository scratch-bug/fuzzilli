const v0 = class {
}
const v2 = new v0();
v2.c = v2;
const v3 = [512,9007199254740991,63841,268435441,-373334214,65536,1432145695,536870889,-1024,268435441];
v3.fill(v2);
const v7 = new Proxy(v3, {});
function f8() {
    function f9(a10) {
        return f9;
    }
    const v13 = [v7];
    return Worker(f9, { arguments: v13, type: "function" });
}
class C16 extends f8 {
}
const v18 = class {
}
function f19() {
    const v20 = new C16();
    return v20;
}
Object.defineProperty(v18, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f19 });
try { new Int32Array(v18); } catch (e) {}
