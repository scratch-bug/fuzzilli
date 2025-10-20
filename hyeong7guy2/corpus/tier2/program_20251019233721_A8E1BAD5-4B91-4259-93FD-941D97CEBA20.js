const v5 = new Uint16Array(1834);
const v6 = [-117.97827058010694,-1.0,-1000000000000.0,-290299.59311071795];
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
}
const v13 = new F8(1834, 207690.68937346665, "plainDateTimeISO");
new F8("object", v13, 1834);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a21;
    this.c = a21;
}
const v22 = new F16(v5, F16, v5, F8);
const v23 = new F16(F16, F8, v22, "object");
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    const v104 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
    gc();
    function f147(a148, a149) {
        const v154 = new SharedArrayBuffer(1409, { maxByteLength: 1409 });
        new Int32Array(v154);
        return v154;
    }
    f147("object", 3);
    const v158 = [0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0];
    const v159 = new Uint8Array(v158);
    async function f160() {
        const v163 = await WebAssembly.compile(v104);
        v23[Symbol.hasInstance] = WebAssembly;
        function f166(a167, a168, a169) {
            const v174 = {
                p(a171, a172) {
                    [101,a172,a169,this,this];
                },
                __proto__: "object",
            };
            return v174;
        }
        f166(v6, 1, 0);
        f166(v6, v163, 97);
        f166(v158, v163, 0);
        f166(v158, 115, a29);
        f166(this, 1834, 0);
        f166(v6, 11, 10);
        f166(v6, 0, 1834);
        f166(v163, v163, 112);
        f166(v158, 101, v163);
        f166(this, 3, 0);
        const v186 = await WebAssembly.compile(v159);
        const t39 = WebAssembly.Instance;
        const v188 = new t39(v163);
        const v189 = WebAssembly.Instance;
        const v191 = v188.exports.exp;
        const v192 = { imp: v191 };
        const v194 = new v189(v186, { env: v192 });
        const t56 = v194.exports.re_exp;
        t56();
    }
    const v201 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
    function F224(a226) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F224();
    const v248 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
    async function f249() {
        const v252 = await WebAssembly.compile(v201);
        const v254 = await WebAssembly.compile(v248);
        const t68 = WebAssembly.Instance;
        const v256 = new t68(v252);
        const v257 = WebAssembly.Instance;
        const v259 = v256.exports.exp;
        const v260 = { imp: v259 };
        const v264 = {
            [v256](a262, a263) {
                return v260;
            },
            env: v260,
        };
        const v265 = new v257(v254, v264);
        const t80 = v265.exports.re_exp;
        t80();
    }
    f249();
}
new F25(Uint32Array, F25);
