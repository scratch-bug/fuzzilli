function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -1000000.0;
    this.h = -1000000.0;
    this.b = -1000000.0;
}
new F1();
const v4 = class extends F1 {
    #b = F1;
    static get g() {
        Object.defineProperty(this, 1162, { enumerable: true, value: F1 });
        return this;
    }
}
v4.g = v4;
let v6;
try { v6 = v4(); } catch (e) {}
const v7 = new v4();
new v4();
const v9 = new v4();
v9.g = v9;
const v10 = /uit/imusyd;
v10.b = v10;
function F11() {
    if (!new.target) { throw 'must be called with new'; }
}
try { F11.valueOf(); } catch (e) {}
const v18 = {};
64 >> 64;
function f21() {
    const v23 = 2147483649n & 2147483649n;
    v23 ^ v23;
    v23 != v23;
    const v26 = (64).constructor;
    v26 - v26;
    v26 & v26;
    const v30 = {};
    v4.length;
    let v33;
    try { v33 = new Proxy(Array, F11); } catch (e) {}
    try { v33(); } catch (e) {}
    const v35 = new Proxy(Array, v30);
    try { new v35(v7); } catch (e) {}
    let v37;
    try { v37 = v35.isArray(F11); } catch (e) {}
    const v38 = v37 && v6;
    try { v35.from(v38); } catch (e) {}
}
for (let v40 = 0; v40 < 50; v40++) {
    v40 < v40;
    64 & v40;
    const v43 = f21();
    v43 ?? v43;
    !("n" == "n");
    let v48;
    try { v48 = v18["n"](); } catch (e) {}
    v48 ?? v48;
}
