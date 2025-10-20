const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        const v6 = {};
        function f7(a8) {
            const v9 = a8 >>> a8;
            let v10 = f5.bind();
            const t8 = v10.constructor;
            t8();
            const v13 = v6.a;
            const v14 = v13 ?? v13;
            v14 ?? v14;
            let v26 = 157;
            v26--;
            let v35 = 138;
            const v36 = v35--;
            v36 >>> v36;
            let v42 = 195;
            v42--;
            let v58 = 203;
            v58--;
            let v61 = -1073741824;
            v61++;
            const v68 = Uint8Array.of(254, 251, 200, 159, 197, 200, 78, 141, 215, v26, 142, 61, 139, 1195618314, 26, 147, 2, v35, 24, 77, 30, 186, v42, 77, 124, 115, 192, 166, 127, 230, 189, 55, 66, 126, 185, 59, 42, v58, 50, v61, 210, 236, 67, 175, 7);
            const t25 = v68.constructor;
            new t25();
            const v71 = v68.toBase64();
            let v72;
            try { v72 = v71.trimEnd(); } catch (e) {}
            v72.trim(78, f5, F1, f7);
            const v74 = v0.constructor;
            const t32 = v74(f5, v74)[1];
            t32(v9, v6);
        }
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { configurable: true, get: f5 });
}
const v78 = new F1(F1, F1);
class C79 {
    static [v78](a81, a82, a83) {
    }
    static [v78](a85, a86, a87) {
    }
}
