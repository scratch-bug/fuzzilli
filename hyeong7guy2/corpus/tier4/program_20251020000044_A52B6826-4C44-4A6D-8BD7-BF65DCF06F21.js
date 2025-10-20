const v1 = class {
}
function f2() {
    class C4 {
        constructor(a6, a7) {
            for (let v8 = 0; v8 < 5; v8++) {
                const v9 = v8++;
                try { new C4(-9007199254740992, this, v1, v9, ...-9007199254740992); } catch (e) {}
                arguments.length;
                const v13 = 1 instanceof v1;
                function f14(a15, a16, a17, a18) {
                    a15.call(v9);
                    return a6;
                }
                try { f14.apply(a6, v13); } catch (e) {}
            }
        }
    }
    new C4(f2, -9007199254740992);
    return 1;
}
f2();
f2();
%OptimizeFunctionOnNextCall(f2);
f2();
