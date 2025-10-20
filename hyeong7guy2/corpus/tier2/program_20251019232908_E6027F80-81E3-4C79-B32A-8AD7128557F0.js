function f0() {
}
class C1 {
    [f0]() {
        try { new BigUint64Array(127); } catch (e) {}
        return f0;
    }
}
new C1(C1, C1);
class C7 {
    get e() {
        try { C1.f = C1; } catch (e) {}
        return C1;
    }
    #d;
}
new C7();
const v10 = new C7();
new WeakSet();
[-4294967295,11,-6,-4294967297,268435440];
function f16() {
    return v10;
}
class C17 {
    [WeakSet](a19, a20) {
        try {
            try { new C1(); } catch (e) {}
        } catch(e22) {
        }
    }
}
new C17();
new C17();
new C17();
[-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
const v27 = class {
}
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    function f32(a33, a34, a35) {
        function F37(a39, a40, a41, a42) {
            if (!new.target) { throw 'must be called with new'; }
            const v43 = -1 >> -1;
            const v45 = new Int8Array();
            Array.apply(Array, v45);
            const v52 = {
                construct(a50, a51) {
                },
            };
            WebAssembly.validate(v45);
            try { this(); } catch (e) {}
            a39 ?? a39;
            function f56() {
            }
            function f57(a58) {
                const v61 = Temporal.PlainDateTime;
                try { v61(); } catch (e) {}
                for (let v63 = 0; v63 < 5; v63++) {
                    const v65 = {
                        get g() {
                        },
                    };
                }
                [0,v43,115,1,1,0,0,0,1,4,1,96,0,0,2,7,1,1,1,1,3,0,0];
                return a33;
            }
            f57.prototype = f57;
            Object.defineProperty(this, "e", { get: f56, set: f57 });
            this.e = this;
        }
        const v90 = new F37();
        v90.e = v90;
    }
    f32();
    %OptimizeFunctionOnNextCall(f32);
}
new F28(v10, F28, f16);
new F28();
new F28();
