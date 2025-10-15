function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = "C";
    this.h = "C";
}
const v3 = new F1();
const v4 = new F1();
v4.a;
const v6 = new F1();
const v7 = v6?.constructor;
try { new v7(); } catch (e) {}
const v9 = new F1();
const v10 = v9?.constructor;
try { new v10(); } catch (e) {}
let v12 = [4294967297,-2,268435441,13,-42679,-9007199254740991,-373579662,15];
const v13 = [129,-13,4,268435439,118504894,-15405,1307151360,-4294967297,4294967297];
const v14 = v13?.__defineSetter__;
try { new v14(v3, v13); } catch (e) {}
("a")[0];
const v18 = [-4472];
WeakMap.prototype;
const v21 = new WeakMap();
class C22 extends F1 {
    static valueOf(a24, a25, a26) {
        return v12 = a24;
    }
    constructor(a28, a29, a30) {
        super();
    }
}
try { new C22(v18, v6, "C"); } catch (e) {}
new C22(v6, v12, v6);
new C22(v21, v18, v6);
const v35 = new WeakMap();
const v36 = v35?.has;
try { new v36(v13); } catch (e) {}
const v38 = class extends WeakMap {
}
try { v38(); } catch (e) {}
new v38();
const v41 = new v38();
const v42 = class {
}
const v45 = this.ReferenceError;
try { v45(Symbol); } catch (e) {}
const v47 = new v42();
const v48 = new v42();
try { v48.constructor(); } catch (e) {}
function F50(a52, a53) {
    if (!new.target) { throw 'must be called with new'; }
    try { a53.propertyIsEnumerable(a52); } catch (e) {}
}
try { new F50("C", v18); } catch (e) {}
const v56 = new F50(v47, v41);
const v57 = v56?.__defineSetter__;
try { new v57(v35, v35); } catch (e) {}
const v59 = new F50(v38, v47);
const v64 = Symbol.toPrimitive;
Symbol.for(v64.description);
Symbol[v64] = Symbol;
function f68() {
}
function f69() {
    function f70() {
        const v71 = class {
        }
        for (let i = 0; i < 5; i++) {
        }
        try { new Uint32Array(v9, f70, v9); } catch (e) {}
        class C75 extends Uint32Array {
        }
        const v77 = class {
        }
        try { v77(); } catch (e) {}
        class C79 {
        }
        const v80 = C79?.constructor;
        try { new v80(v71); } catch (e) {}
        for (let v83 = 0; v83 < 50; v83++) {
            v83 + v83;
            v83 >> v83;
            const v86 = {};
            for (const v87 in "boolean") {
                try { v87.substr(v59, v59); } catch (e) {}
                function f89(a90, a91, a92, a93) {
                }
            }
            const v94 = /(fp*)/iv;
            for (const v95 in v94) {
                v94[v95];
                function f97() {
                    return v94;
                }
            }
            const v98 = {};
            const v99 = Symbol.asyncDispose;
            Symbol.for(v99.description);
            const v105 = {
                [Symbol]() {
                    v99 != Symbol;
                },
            };
            f69();
            try { ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").small(); } catch (e) {}
            /../g;
            const v110 = ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match();
            v110[0] = v110;
            const v111 = v110.pop();
            try { v111.constructor(); } catch (e) {}
            for (const v114 of v110) {
            }
            const v115 = new Uint16Array();
            v115[28];
        }
        const v117 = new Uint8Array();
        const wasm_code = v117;
        const v119 = {};
        const v120 = {};
        const v121 = {};
        const v122 = class {
        }
        const v123 = {};
        const v124 = {};
        const v125 = class {
        }
        try { v125.call(v35); } catch (e) {}
        class C127 {
        }
        let v128 = 65536n;
        v128 **= v128;
        function f129() {
            return f129;
        }
        function f130(a131) {
        }
        class C132 extends f130 {
        }
        const v133 = class {
        }
        v133.a = v133;
        class C134 {
        }
        C134.name;
        const v136 = class {
        }
        class C137 {
        }
        C137.d = C137;
        class C138 {
        }
        for (const v139 in Uint8Array) {
            for (let [v140,v141,v142] of 256) {
            }
        }
        const v143 = {};
        try {
            new F1();
        } catch(e145) {
        }
        const v147 = Array?.apply;
        try { new v147(v3, f70); } catch (e) {}
        const v150 = Array.prototype.at;
        let v151;
        try { v151 = v150.call(v59, 256); } catch (e) {}
        v151 ?? v151;
        for (let i154 = 0; i154 < 20000; i154++) {
        }
        const v160 = {};
        v160.g = v160;
        const v161 = {};
        return { done: true };
    }
    return { next: f70 };
}
const v165 = Symbol.iterator;
f68.bind(null, ...{ [v165]: f69 });
