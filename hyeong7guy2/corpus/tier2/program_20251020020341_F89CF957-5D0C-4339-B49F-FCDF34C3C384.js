new WeakMap();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            let v11 = -1098098658;
            const v13 = {};
            const v14 = [771801917];
            try { v14(a7, f9, F4, f9); } catch (e) {}
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v20 = new F16(a7, v13);
            let v21 = 30349n;
            -v21;
            ({"b":v21,"e":v11,...Int32Array} = v20);
            eval(a7);
            return v11;
        }
        f9();
        f9(a7);
        return f9;
    }
}
const v27 = new F4();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
[7,9007199254740991,-13,-51272,-683686619,-9,1073741825,-3196];
class C37 {
}
function f38() {
}
function f39(a40) {
}
function F41(a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    const v45 = this.constructor;
    function f50() {
        return 750;
    }
    const v51 = Symbol.toPrimitive;
    f50[v51] = f50;
    class C52 extends f50 {
    }
    const v53 = {};
    const v55 = {};
    for (const v57 in Int32Array) {
    }
    function f59() {
    }
    f59.shared = "NFC";
    f59.maximum = 2624;
    Object.defineProperty(f59, "initial", { value: C52 });
    const t55 = WebAssembly.Memory;
    const v62 = new t55(f59);
    v62.toResizableBuffer(F41, "string", v51, C37);
    try { new v45(); } catch (e) {}
}
new F41(F41, F41);
