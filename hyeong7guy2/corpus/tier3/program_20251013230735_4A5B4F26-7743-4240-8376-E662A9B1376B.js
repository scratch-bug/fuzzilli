const v2 = new Uint8Array(286);
const v3 = class extends Uint8Array {
}
const v4 = new v3();
const v5 = new v3();
function f6() {
    for (const v7 of v2) {
        v5[8] >>= v7;
    }
}
function f8() {
}
const v9 = [];
const v10 = v9.constructor;
const v26 = {
    get p() {
        const v13 = eval();
        function F14() {
            if (!new.target) { throw 'must be called with new'; }
            try { v13(v10); } catch (e) {}
        }
        new F14();
    },
    [v4](a19, a20, a21) {
        for (let [,v23,v24,v25] of v9) {
        }
    },
};
v26.p;
