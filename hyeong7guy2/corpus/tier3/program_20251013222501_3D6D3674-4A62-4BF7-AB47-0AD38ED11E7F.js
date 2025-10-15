const v2 = class {
}
const v3 = new v2();
new v2();
const v6 = new WeakMap();
try { v6.get(64); } catch (e) {}
function F9() {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = {};
    for (let v12 = 0; v12 < 100; v12++) {
        v12 & v12;
    }
    const v14 = [];
    const v15 = [3.301778678273104,-3.6035983571022255e+307,-7.277379514595747,-712941.9284460039,-2.0,0.36366013621571913,-3.0,1000000.0];
    v15[7] = v15;
    function F16(a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        a19.indexOf(-2.226519999017758e+306);
        a18[4] = a18;
        try { a19.reduceRight(this, a19, a18); } catch (e) {}
    }
    try { new F16(F16, this); } catch (e) {}
    try { v14.constructor(v3, v15); } catch (e) {}
}
try { new F9(); } catch (e) {}
const v25 = new F9();
const v26 = v25?.constructor;
try { new v26(); } catch (e) {}
const v28 = {};
function f30() {
    return f30;
}
const v31 = new Proxy(f30, v28);
try { Reflect.apply(Reflect, -0.0, -0.0); } catch (e) {}
const v34 = Reflect.construct(v31, v28);
try { v34.construct(-2.226519999017758e+306, v28); } catch (e) {}
