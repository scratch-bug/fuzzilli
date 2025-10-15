const v1 = -Infinity;
const v2 = class {
}
v2.name = v2;
new v2();
const v4 = class {
    m(a6, a7, a8) {
        class C9 {
        }
        async function f10(a11, a12) {
            await f10;
        }
        f10(C9, f10);
        function F15(a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = a18;
        }
        %PrepareFunctionForOptimization(f10);
        %OptimizeFunctionOnNextCall(f10);
        function f20() {
        }
        new Proxy(f20, {});
        for (let v23 = 0; v23 < 1000; v23++) {
            v23++;
        }
        super.getUint16();
    }
}
const v26 = new v4();
try { v26.m(v1, v4); } catch (e) {}
for (let i29 = 0; i29 < 20000; i29++) {
}
