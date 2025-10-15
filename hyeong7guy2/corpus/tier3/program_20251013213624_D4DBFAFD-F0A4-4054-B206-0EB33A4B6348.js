function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -9007199254740991;
    this.b = -9007199254740991;
    this.f = -9007199254740991;
}
new F0();
new F0();
new Set();
new Int32Array();
class C11 {
    static o(a13, a14, a15) {
        const v16 = {};
        Proxy();
        return 0;
    }
}
new C11();
const v22 = new Set();
v22 ?? v22;
([232656985,20082,-14,1141014574,268435440,1,1,257,268435456]).constructor;
const v27 = Symbol.iterator;
v27.description;
try { Symbol(); } catch (e) {}
const v31 = {
    [v27]() {
    },
};
[-0.0076588076814161354,846.8147469512944,613.0582036291662];
function F34(a36) {
    if (!new.target) { throw 'must be called with new'; }
    a36--;
    const v38 = this.constructor;
    try { new v38(this); } catch (e) {}
}
new F34(Int16Array);
new F34();
const v42 = class extends Int16Array {
}
const v43 = {};
const v44 = class {
}
function F45(a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    function f49(a50) {
        a50[0];
        new Array(a50[1]);
    }
    const v57 = [1.1,{}];
    for (let i59 = 0; i59 < 20000; i59++) {
        v57[1] = 2;
        f49(v57);
    }
}
const v67 = F45?.__lookupGetter__;
try { new v67(); } catch (e) {}
const v69 = new F45();
const t57 = v69.constructor;
new t57();
Uint8Array.BYTES_PER_ELEMENT = Uint8Array;
