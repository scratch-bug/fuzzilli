[5.563651414324781,-1000000000000.0,-1.914619907554405,1.7976931348623157e+308,0.7142567929779239,875133.5285760264,1000.0];
8 & 8;
const v8 = class {
    #m(a10, a11) {
        let {"length":v12,} = "n";
        return v12;
    }
    e = "n";
}
try { v8(); } catch (e) {}
const v14 = new Array(8);
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    const v20 = this?.__lookupSetter__;
    try { new v20(8); } catch (e) {}
    this.h = a19;
    this.f = v14;
}
const v22 = new F16(-37934, 8);
const v23 = new F16(1000, 8);
v23.h;
new F16(8, -37934);
class C26 {
}
C26.name;
const v28 = new C26();
const v29 = class {
    n() {
        function f31(a32, a33) {
            function f34(a35) {
                ({"f":a35,} = this);
                return v29;
            }
            return f34;
        }
        const v38 = ["function",this];
        new Worker(f31, { arguments: v38, type: "function" });
    }
}
const v41 = v28?.constructor;
try { new v41(); } catch (e) {}
const v43 = class extends C26 {
}
try { v43(); } catch (e) {}
const v45 = new v43();
try { v45.constructor(); } catch (e) {}
function F47(a49) {
    if (!new.target) { throw 'must be called with new'; }
}
function f50(a51, a52) {
    function F53(a55, a56, a57, a58) {
        if (!new.target) { throw 'must be called with new'; }
        a56 ?? a56;
        const v61 = -51226n >> -51226n;
        v61 / v61;
        const t54 = [3];
        t54.length = 3;
        a57 ?? a57;
        a58 ?? a58;
    }
    const v67 = new F53();
    function f68(a69) {
        function F70(a72, a73) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F70();
        return F70;
    }
    v67.constructor = f68;
    const v75 = v67?.constructor;
    try { new v75(a52, v28, v67, a52); } catch (e) {}
    try { Reflect.isExtensible(v22); } catch (e) {}
}
const v89 = {
    construct(a80, a81) {
        function f83(a84) {
        }
        a81.constructor = Array;
        const v85 = a81?.constructor;
        try { new v85(1073741823n); } catch (e) {}
        return Reflect.construct(a80, a81);
    },
};
for (let i92 = 0; i92 < 20000; ++i92) {
    const v98 = i92 << i92;
    let v99 = v98 - v98;
    v99--;
}
const v101 = Proxy?.revocable;
try { new v101(v43, 1073741823n); } catch (e) {}
function f103() {
}
const v104 = new Proxy(f103, v89);
for (let v105 = 0; v105 < 100; v105++) {
    const v109 = f50([1,2], v104);
    v109 ?? v109;
}
