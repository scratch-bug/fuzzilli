const v0 = /a*?Z/mvs;
function f1() {
    return v0;
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a4;
    this.h = f1;
}
const v5 = new F2(v0);
v5.e = v5;
const v6 = new F2(v0);
const v11 = new Uint8Array();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    a14.f = a14;
    a15.flags;
    this.h = f1;
    this.f = a15;
    this.g = a15;
}
const v17 = new F12(v5, v0);
new F12(5, v17);
new F12(5, F12);
const v20 = new F12(v11, "g");
v20.g = v20;
let v21 = 12234;
v21--;
function f23(a24) {
    try { a24.search(v6); } catch (e) {}
    const v27 = new Uint32Array(v21);
    function f28() {
        return Uint32Array;
    }
    const v29 = [-1949062951,-809467572,1,-29760,1367634515,47021,-1523345805];
    new f28(...v29, ...v29, ...v27);
}
function F31(a33) {
    if (!new.target) { throw 'must be called with new'; }
    const v35 = [1];
    v35.length = 16;
    v35.push();
}
function F38(a40) {
    if (!new.target) { throw 'must be called with new'; }
}
const v41 = /Ra\S(\1a)/ud;
const v42 = v6.constructor;
try { new v42(NaN, v41); } catch (e) {}
F31.e = F31;
const v45 = Symbol.toPrimitive;
const v47 = v45.description;
Symbol.for(v47);
const v49 = [268435439,-65537,-256,256,-3,15347,853708011];
function f50(a51) {
    return Error().stack.includes(v49);
}
for (let v56 = 0; v56 < 250; v56++) {
    f50();
}
F31[v45] = f23;
const v62 = {
    o(a59, a60) {
        a59 ?? a59;
        super[F31] = a60;
        return Symbol;
    },
};
const v63 = v62?.__lookupGetter__;
try { new v63(F31); } catch (e) {}
let v65 = 10;
for (; v65--;) {
    let {"d":v67,"length":v68,} = v47;
    function f69(a70, a71, a72, a73) {
    }
    new Promise(f69);
}
const v76 = v62.o();
v76.toPrimitive = v76;
const v77 = class {
}
v77.name = v77;
