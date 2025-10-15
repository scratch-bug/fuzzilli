const v2 = [268435441,268435441,268435441,268435441,268435441];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            let v10 = -1098098658;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v16 = new F12(268435441, 268435441);
            v16.constructor.prototype;
            let v19 = 30349n;
            const v21 = -9007199254740990 >> a5;
            const v22 = v21 / v21;
            ({"b":v19,"e":v10,...Int32Array} = F12);
            const v24 = {};
            function F25(a27, a28, a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F25(268435441, a9, undefined, v22);
            const v32 = v2.constructor;
            v32();
            const v34 = new ArrayBuffer();
            const v35 = v34.slice(a5, v32);
            v35.c = v35;
            const v37 = new Float32Array();
            const v38 = v37.slice();
            try { v38.indexOf(); } catch (e) {}
            const v40 = %WasmStruct();
            function F41() {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F41();
            return 268435441;
        }
        f8(f7);
        f8(a6);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v46 = new F3(undefined, undefined);
class C47 {
    static [v46](a49, a50, a51) {
    }
}
