function f0(a1) {
    a1();
}
for (let i35 = 0; i35; i35++) {
}
const v44 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t6 = WebAssembly.Module;
const v47 = new t6(v44);
function f48() {
}
const v49 = { f: f48 };
const v50 = { m: v49 };
const t12 = WebAssembly.Instance;
const v52 = new t12(v47, v50);
const v54 = v52.exports.main;
for (let i71 = (() => {
        function F55(a57) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = a57;
        }
        const v58 = class {
        }
        let v60;
        try { v60 = Int16Array.reverse(); } catch (e) {}
        async function f61(a62, a63) {
            const v65 = Symbol.asyncDispose;
            const v67 = {
                [v65]() {
                },
            };
            await using v68 = v67;
        }
        f61(v60, v58);
        return 0;
    })();
    i71;
    i71++) {
    f0(v54);
}
