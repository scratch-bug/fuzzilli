function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = class {
        }
        const v9 = new v8();
        v9.e = v9;
        const v10 = new v8();
        const v11 = v10.constructor;
        try { v11(v11, a5, f4); } catch (e) {}
        const v13 = new v11();
        try { v13.bold(this, v11, a5); } catch (e) {}
        v13.e = v13;
        const v15 = [12,10];
        let v16;
        try { v16 = v15.toString(); } catch (e) {}
        const v17 = v16.lastIndexOf(v16, a6, v16);
        try { v15.findLastIndex(v17); } catch (e) {}
        [v15];
        function F20() {
            if (!new.target) { throw 'must be called with new'; }
        }
        try { F20(); } catch (e) {}
        try { new F20(); } catch (e) {}
        const v24 = new F20();
        const v25 = v24.constructor;
        try { v25(f4); } catch (e) {}
        const v28 = new Int32Array();
        try { Uint8ClampedArray.call(); } catch (e) {}
        for (let [v31,,v32] of v28) {
            v17 > this;
        }
        const v35 = WeakMap.delete;
        try { v35(); } catch (e) {}
        class C37 {
        }
        try { C37(); } catch (e) {}
        const v39 = C37?.constructor;
        try { ("V").anchor(); } catch (e) {}
        eval(v39);
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v45 = new F0(F0, F0);
const v46 = new F0(F0, v45);
const t46 = v46.constructor;
new t46();
