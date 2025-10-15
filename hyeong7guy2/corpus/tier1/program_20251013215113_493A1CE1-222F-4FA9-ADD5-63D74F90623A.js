const v2 = new Int32Array(16);
class C4 extends Int32Array {
    p(a6) {
    }
    static g;
    b = 16;
    static #o(a8, a9) {
        return a9;
    }
}
C4.g = C4;
const v10 = new C4();
const v11 = v10?.some;
try { new v11(C4); } catch (e) {}
const v13 = new C4();
try { v13.p(v13); } catch (e) {}
new C4();
const v16 = new C4();
try { v16.lastIndexOf(v2); } catch (e) {}
const v21 = ("kohm").normalize("NFC");
class C23 {
    [C4](a25, a26, a27) {
        return v21;
    }
    toString(a29, a30, a31, a32) {
        return a32;
    }
}
new C23();
new C23();
[];
try { new Symbol(); } catch (e) {}
Symbol.asyncDispose = Symbol;
const v40 = Symbol.iterator;
const v48 = {
    [v40]() {
        let v42 = 10;
        const v47 = {
            next() {
                v42--;
                return { done: v42, value: v42 };
            },
        };
        return v47;
    },
};
const v49 = class {
    static #p(a51) {
        Math.atan2(a51);
        Math.log();
        a51 | -14;
        return a51;
    }
}
try { v49.toString(); } catch (e) {}
let v58;
try { v58 = v49(); } catch (e) {}
v58 ?? v58;
const v60 = new v49();
const v61 = new v49();
const v62 = new v49();
try { v62.hasOwnProperty(v62); } catch (e) {}
4096 >>> 4096;
new Int16Array(4096);
function F68(a70, a71) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = Int16Array;
}
try { new F68(v2, v2); } catch (e) {}
new F68();
new F68(v48, v61);
new F68(v60);
const v76 = new F68();
const v77 = v76?.hasOwnProperty;
try { new v77(F68); } catch (e) {}
try { Uint8Array(Uint8Array, v13, Uint8Array); } catch (e) {}
class C81 extends Uint8Array {
}
try { C81.fromHex(Uint8Array); } catch (e) {}
const v83 = new C81();
function f84() {
}
try { f84(); } catch (e) {}
for (let v86 = 0; v86 < 5; v86++) {
    const v87 = v86 < v83;
    v87 && v87;
}
function f89() {
    Object[Symbol.matchAll];
    function f94() {
        1048576 >>> 1048576;
        Array(1048576);
        return { done: true };
    }
    return { next: f94 };
}
const v103 = Symbol.iterator;
f84.bind(null, ...{ [v103]: f89 });
