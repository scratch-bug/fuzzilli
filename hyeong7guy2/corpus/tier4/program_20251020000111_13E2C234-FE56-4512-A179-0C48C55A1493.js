function f0() {
}
class C1 {
    [f0]() {
        this.construct(this, f0);
    }
    static get c() {
    }
}
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = C1;
}
const v8 = new F5();
try { v8.g(); } catch (e) {}
C1.c = C1;
const v10 = [186.00706921515916,-2.2250738585072014e-308,-2.7719578083075255e+307,-1.1635490195712137,-5.0,1000000000.0,-454427.0373439883,60.45939547989724];
const v11 = class extends C1 {
    #o(a13, a14) {
        super.f = F5;
        return a13;
    }
    [v10];
}
new v11();
new v11();
v11.propertyIsEnumerable();
new v11();
Float32Array.from(v10);
new Float32Array(3);
for (let v24 = 0; v24 < 25; v24++) {
    const v25 = [1000000000.0,1000000000.0,-7.948056227675908,352578.97053486225,5.3407739300208235,1000000000.0,1000000000000.0,1000000000000.0,0.6324704201679694,1.0837827252409097e+308];
    try { v25.forEach(); } catch (e) {}
    try {
        for (let v31 = 0; v31 < 5; v31++) {
            v31 + v31;
            v31 < 1000;
            const v35 = [];
            async function f36() {
                await v35;
            }
            f36();
        }
        -1.7591900299113206e+308 - -1.7591900299113206e+308;
        WeakSet.arguments = WeakSet;
    } catch(e46) {
        e46.stack;
    }
}
