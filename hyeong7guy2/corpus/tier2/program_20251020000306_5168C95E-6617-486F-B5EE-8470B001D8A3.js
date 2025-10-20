new Array(1623);
[Array,1623,-60739,1145180354,1623];
new Date();
[-9223372036854775808,-4294967295,16];
const v12 = [];
function f13(a14) {
    const v16 = class {
        set g(a18) {
            try { this.valueOf(); } catch (e) {}
            function F20(a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                const v26 = globalThis?.performance?.measureMemory;
                try { v26(a23); } catch (e) {}
            }
            new F20(736.3033200176926, F20);
        }
    }
    class C29 extends v16 {
        valueOf(a31, a32) {
            super.g /= 736.3033200176926;
        }
    }
    const v33 = new C29();
    v33.valueOf();
    const v35 = a14.apply(a14, f13, f13, f13, f13);
    SharedArrayBuffer.slice(v12, v35, a14);
    return v35;
}
v12.then = f13;
async function f38() {
    await v12;
    return f38;
}
f38();
function F41(a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    function f45() {
        function f46(a47) {
            const v50 = new SharedArrayBuffer(9);
            const v52 = new Uint8Array(v50);
            return v52.toBase64();
        }
        return f46;
    }
    Object.defineProperty(this, "toString", { get: f45 });
}
const v54 = new F41(F41, F41);
class C55 {
    static [v54](a57, a58, a59) {
    }
}
