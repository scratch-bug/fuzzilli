function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new Uint8Array();
256 < 256;
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11) {
        return a10;
    }
    this[Symbol.split] = f9;
}
new F6();
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    a17.a = a17;
}
new F15(F0);
function f21() {
}
const v23 = class extends f21 {
}
function f24(a25, a26, a27) {
    for (let v28 = 0; v28 < 5; v28++) {
        const v29 = class {
        }
        [v29,"function"];
    }
}
try { f24("o7e", v23); } catch (e) {}
const v36 = { type: "function" };
function f38() {
    return -9007199254740992;
}
const v46 = f38();
const v70 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,256,109,97,105,110,256];
const v71 = {};
v70["findLast"](f38);
for (const v74 in v70) {
    function f75(a76, a77) {
        const v78 = { d: a76 };
    }
    f75(v46);
}
new Worker(f24, v36);
