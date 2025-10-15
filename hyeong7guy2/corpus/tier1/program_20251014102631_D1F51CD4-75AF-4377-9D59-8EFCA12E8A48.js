function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 536870888;
}
new F1();
const v4 = new F1();
v4.a = v4;
const v5 = new F1();
const v6 = v5?.constructor;
try { new v6(); } catch (e) {}
new F1();
-1017871558n === -1017871558n;
function f11() {
    return 536870888;
}
[v5,536870888,-1017871558n];
function f15() {
    return F1;
}
with (Map) {
    function F17(a19, a20, a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
        try { new a19(a20, a19, this, this); } catch (e) {}
    }
    const v24 = new F17(F17, F17, F17, F17);
    const v25 = new F17(F17, v24);
    const v26 = v25?.constructor;
    try { new v26(F17, F17, v25, f15); } catch (e) {}
    function F28(a30, a31) {
        if (!new.target) { throw 'must be called with new'; }
    }
    Float32Array.prototype = Float32Array;
    const v33 = new Float32Array();
    for (let i37 = (() => {
            0 !== 0;
            return 0;
        })();
        i37 < 20000;
        ++i37) {
        const v43 = {};
        v33.d *= 1.1356230574660949e+308;
    }
}
