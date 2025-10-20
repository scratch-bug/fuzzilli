const v0 = [1.3814023954619583e+307,9.110412657177356,1.0305793977661753e+308];
class C1 {
    p() {
        class C3 {
            static get c() {
                %PretenureAllocationSite(this);
                return Object;
            }
        }
        new C3();
        return v0;
    }
}
new C1();
const v8 = new C1();
const v9 = [-3.0,-1000000000.0,0.9412292169438611,-1.0,337.5284072992429];
class C10 {
    static get h() {
        try {
            new C1();
        } catch(e13) {
        }
        return v0;
    }
}
new C10();
const v15 = [536870887,512];
function F17(a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v8;
    this.d = a20;
    this.c = a21;
}
new F17(v9, v0, v0);
new F17(v15, v9, v9);
new F17(v15, v0, v0);
new F17(v9, v15, v0);
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    function f30(a31, a32, a33) {
        const v35 = [-28740];
        class C36 {
        }
        function F37(a39, a40, a41, a42) {
            if (!new.target) { throw 'must be called with new'; }
            a41.isPrototypeOf();
        }
        try { F37.apply(this, a29); } catch (e) {}
        const v45 = new F37(v35, -1, C36);
        return v45;
    }
    f30(this, F26, F26);
    %OptimizeFunctionOnNextCall(f30);
}
const v47 = new F26();
new F26(v47, v47);
new F26();
for (let v50 = 0; v50 < 5; v50++) {
    const v51 = [-9.370648282134732e+307,-1.7976931348623157e+308,1000.0];
    function f52() {
        return v51;
    }
    Object.defineProperty(v51, "toString", { configurable: true, get: f52 });
    v51.pop();
}
