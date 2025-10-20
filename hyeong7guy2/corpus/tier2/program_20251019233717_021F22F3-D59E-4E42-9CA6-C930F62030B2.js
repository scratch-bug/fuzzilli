function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        const v8 = a7 >>> a7;
        v8 - v8;
        const v10 = a7 ?? a7;
        -v10;
        const v12 = v10 ?? v10;
        v12 ?? v12;
        let v14 = 108;
        v14--;
        let v16 = 20;
        v16--;
        let v18 = 64;
        v18--;
        let v20 = 158;
        v20--;
        let v22 = 164;
        const v23 = v22--;
        let v24 = 195;
        v24--;
        let v26 = 142;
        v26++;
        let v28 = 26;
        v28++;
        function F30(a32, a33) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F30();
        let v35 = 10;
        v35--;
        const v38 = v35 == 0;
        return { done: v38, value: v35 };
        const v41 = 139 - 139;
        v41 >> v41;
        let v43 = -4096;
        const v44 = v43--;
        v44 + v44;
        let v46 = 148;
        v46++;
        let v48 = 249;
        v48--;
        let v51 = 21;
        v51--;
        const t46 = 232;
        t46[3] = 232;
        const t49 = 232;
        t49.d = 232;
        let v53;
        try {
        const t0 = 232;
        v53 = t0(a4, F0, v23);
        } catch (e) {}
        const v54 = v53 ?? v53;
        v54 ?? v54;
        function F56(a58, a59) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v60 = F56.name;
        v60.link(v60);
        const v62 = class {
        }
        const v63 = F56();
        const v64 = {};
        const v65 = v63.e;
        const v66 = v65 / v65;
        v66 === v66;
        const v68 = F56();
        const t71 = v68.constructor;
        const v70 = t71();
        v70.e = v70;
        const v71 = v68.e;
        const v72 = v71 >>> v71;
        v72 & v72;
        const v75 = eval();
        const v76 = v75 !== v75;
        v76 && v76;
    }
    f6();
    %OptimizeMaglevOnNextCall(f6);
    f6(F2);
}
const v80 = new F2();
const v81 = v80.constructor;
v81.prototype = v81;
const v82 = new v81();
const t89 = v82.constructor;
t89();
