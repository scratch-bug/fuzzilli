const v0 = [-9007199254740992,-15,129];
function f1() {
    function f2() {
        const v3 = [];
        for (let v5 = 0; v5 < 250; v5++) {
            v3[1] = 2;
            v5++;
        }
    }
    return f2;
}
Object.defineProperty(v0, "constructor", { get: f1 });
const t12 = v0.constructor;
t12();
