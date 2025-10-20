function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = class {
        }
        const v9 = new v8();
        v9.e = v9;
        const v10 = new v8();
        const v11 = v10.constructor;
        let v12;
        try { v12 = v11(); } catch (e) {}
        const v13 = new v11();
        let v14;
        try { v14 = v13.bold(); } catch (e) {}
        v13.e = v13;
        const v15 = [12,10];
        let v16;
        try { v16 = v15.toString(); } catch (e) {}
        const v17 = v16.lastIndexOf(a5, v8, a5, v16, v16);
        try { v15.findLastIndex(v17); } catch (e) {}
        [v15];
        function F20() {
            if (!new.target) { throw 'must be called with new'; }
        }
        let v22;
        try { v22 = F20(); } catch (e) {}
        try { new F20(); } catch (e) {}
        const v24 = new F20();
        const v25 = v24.constructor;
        try { v12(a7, v25); } catch (e) {}
        const v28 = new Int32Array(v14, v16, v22);
        try { Uint8ClampedArray.call(F0, F0); } catch (e) {}
        for (let [v31,,v32] of v28) {
        }
        const v34 = WeakMap.delete;
        try { v34(); } catch (e) {}
        class C36 {
        }
        try { C36(); } catch (e) {}
        C36?.constructor;
        try { ("V").anchor(); } catch (e) {}
        eval(a6);
    }
    f4(F0, a2, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v45 = new F0();
const t48 = v45.constructor;
new t48();
