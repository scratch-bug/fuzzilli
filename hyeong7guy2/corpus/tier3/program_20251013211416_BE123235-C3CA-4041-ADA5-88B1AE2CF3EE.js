const v2 = class {
    static get a() {
        return v2;
    }
    static b = null;
    static get h() {
        super[this];
        return this;
    }
    [Infinity](a7, a8) {
        function f9(a10, a11) {
            a10[0];
            if (a10 === 1.1) {
                a10[0] = 2;
            }
        }
        let v17 = [1];
        function f18() {
            v17[0] = 1.1;
            const v20 = {};
        }
        const v21 = { construct: f18 };
        function f23() {
        }
        const v24 = Proxy(f23, v21);
        function f25() {
        }
        const dummy = f25;
        for (let i28 = 0; i28 < 30000; i28++) {
            f9(v17, dummy);
            v17 = 1;
        }
        f9(v17, v24);
        return a7;
    }
}
new v2();
new v2();
class C39 extends v2 {
    static toString(a41, a42, a43) {
        return a41;
    }
    constructor(a45, a46) {
        super();
    }
}
new C39(null, Infinity);
new Int32Array();
new Float64Array(13);
Float32Array.BYTES_PER_ELEMENT;
let v61;
try { v61 = Set.constructor(); } catch (e) {}
v61 ?? v61;
([232656985,20082,-14,1141014574,268435440,1,1,257,268435456])?.constructor;
/(?:a?)*/ivd;
[2041279713,536870888,16,-61680];
const v68 = Symbol.iterator;
v68.description;
Symbol.for();
Symbol.for(v68.description);
Int16Array.c = Int16Array;
const v77 = [-0.0076588076814161354,846.8147469512944,613.0582036291662];
const v78 = v77[1];
v78 + v78;
function F80(a82) {
    if (!new.target) { throw 'must be called with new'; }
    a82--;
    const v84 = this.constructor;
    try { new v84(); } catch (e) {}
    this.h = Int16Array;
    this.c = Int16Array;
}
new F80(1462);
let v87 = new F80();
const v88 = class extends Int16Array {
    p(a90, a91, a92, a93) {
        let v94 = 0;
        const v98 = 127 / 127;
        v98 - (v98 || 268435456);
        v87++;
        v94++;
        v94 < 7;
        function f105() {
            return f105;
        }
        function f106() {
            return { done: true, __proto__: f105 };
        }
    }
}
try { v88(); } catch (e) {}
new v88();
new v88();
new v88();
[];
const v116 = {};
v116.h = v116;
v116.c = v116;
const v117 = class {
    static #p(a119) {
        ~a119;
    }
}
const v122 = new v117();
v122.g = v122;
const v123 = new v117();
try { v123.hasOwnProperty(v123); } catch (e) {}
4096 >>> 4096;
function F128(a130, a131) {
    if (!new.target) { throw 'must be called with new'; }
    a131 ?? a131;
}
const v133 = new F128(v122);
const v134 = v133?.__lookupGetter__;
try { new v134(v133); } catch (e) {}
v133.__defineGetter__.length;
const v138 = new F128(v123, v122);
const t117 = v138.constructor;
new t117(v77, Int16Array);
class C142 extends Uint8Array {
}
new C142();
function f144() {
}
function f145() {
    return {};
}
const v151 = { [Symbol]: f145 };
const v154 = {
    set e(a153) {
    },
};
const v155 = {};
f144.bind(null, v151);
