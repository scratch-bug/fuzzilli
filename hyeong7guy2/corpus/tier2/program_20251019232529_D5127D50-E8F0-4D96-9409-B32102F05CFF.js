class C1 {
    static [1000000.0]() {
    }
    [1000000.0]() {
    }
    #valueOf(a5, a6, a7) {
    }
    c;
}
const v8 = new C1();
const t10 = [4.0,1.7976931348623157e+308];
t10[8] = 1000000.0;
function f10() {
    return f10;
}
function f13() {
    return f13;
}
function f14() {
    function f15(a16) {
        const v17 = async () => {
            const v19 = new Uint8Array(1);
            try {
                await WebAssembly.instantiate(v19);
            } catch(e23) {
            }
            return v17;
        };
        v17();
        Object.defineProperty(v8, f15, { writable: true, configurable: true, enumerable: true, set: f14 });
        return C1;
    }
    f15.toString = f15;
    return f15;
}
function f25(a26) {
    return a26;
}
Object.defineProperty(f13, Symbol.iterator, { configurable: true, enumerable: true, get: f14, set: f25 });
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
}
try { new Uint16Array(f13); } catch (e) {}
const v35 = new Date(1000000.0);
v35.toLocaleString();
