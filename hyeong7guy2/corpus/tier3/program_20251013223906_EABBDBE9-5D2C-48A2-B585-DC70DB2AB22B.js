function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = class {
    [F0] = F0;
    static [F0];
    [-1] = F0;
    [F0] = F0;
    set d(a4) {
    }
}
let v8 = true;
const v12 = class {
}
new v12();
new Int32Array();
const v17 = class {
}
function F20(a22) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v24 = 0; v24 < 250; v24++) {
    let v26 = v8++;
    v26--;
    const v29 = new F20();
    (typeof v29)[1].normalize();
}
try { Proxy(); } catch (e) {}
for (let i118 = (() => {
        function* f113(a114, a115, a116) {
        }
        f113.prototype = f113;
        return 0;
    })();
    i118 < 25000;
    ++i118) {
}
