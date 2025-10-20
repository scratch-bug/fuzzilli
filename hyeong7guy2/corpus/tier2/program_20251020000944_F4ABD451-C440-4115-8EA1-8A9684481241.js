[4,-1073741824,-2];
function f20(a21) {
}
function f45(a46) {
}
const v79 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
gc();
const v123 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f124() {
    const v127 = await WebAssembly.compile(v79);
    const v129 = await WebAssembly.compile(v123);
    const t11 = WebAssembly.Instance;
    const v131 = new t11(v127);
    const v132 = WebAssembly.Instance;
    const v134 = v131.exports.exp;
    const v135 = { imp: v134 };
    const v136 = { env: v135 };
    for (let v138 = 0; v138 < 5; v138++) {
        v138 < 20000;
        v138++;
    }
    const v142 = new v132(v129, v136);
    const t22 = v142.exports.re_exp;
    t22(0, 1);
}
f124();
const v150 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
function f168() {
}
const v194 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f195() {
    const v197 = WebAssembly.compile(v150);
    const v201 = {};
    for (let v202 = 0; v202 < 5; v202++) {
    }
    for (let v206 = 0; v206 < 5; v206++) {
        v206 < 20000;
        v206++;
    }
    for (let v211 = 0; v211 < 5; v211++) {
    }
    function F212(a214, a215) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v216 = {};
    function f217() {
    }
    const v218 = await v197;
    const v220 = await WebAssembly.compile(v194);
    const t49 = WebAssembly.Instance;
    const v222 = new t49(v218);
    const v223 = WebAssembly.Instance;
    const v225 = v222.exports.exp;
    const v226 = { imp: v225 };
    const v228 = new v223(v220, { env: v226 });
    const v230 = v228.exports.re_exp;
    v230(v230, WebAssembly);
}
f195();
for (let i235 = 0, i236 = 10; i236; i236--) {
}
for (let i243 = 7; i243 < 20000; i243++) {
}
