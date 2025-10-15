function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F2(14);
const v6 = new F2();
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
}
new F7(v6, F2, v6, F2);
new F7(v6, v6, v6, v5);
new F7(F2, v5, v6);
function f17() {
}
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
}
new F18(F18);
class C22 {
}
new C22();
const v25 = [];
function f26() {
    return v25;
}
class C29 extends Set {
    #h;
}
new C29();
new Float64Array();
new Float32Array(3);
const v35 = [232656985,20082,-14,1141014574,268435440,1,1,257,268435456];
for (let v36 = 0; v36 < 100; v36++) {
    f17();
}
function f38(a39, a40, a41, a42) {
    [a41,f38];
}
const v48 = {
    [Symbol]() {
        return {};
    },
};
[-0.0076588076814161354,846.8147469512944,613.0582036291662];
function F52(a54) {
    if (!new.target) { throw 'must be called with new'; }
    this?.constructor;
}
new F52(1462);
const v57 = class extends Int16Array {
    p(a59, a60, a61, a62) {
        C22 < 7;
        return v35;
        const v68 = {
            set d(a67) {
            },
        };
    }
}
try { v57(); } catch (e) {}
const v70 = Symbol.iterator;
const v73 = {
    [v70]() {
        const v72 = {};
    },
};
const v74 = class {
}
new v74();
let v76;
try { v76 = v74.hasOwnProperty(v74); } catch (e) {}
let v77 = new Int16Array();
v77 = v76;
