function f2() {
    return WeakMap;
}
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(a6, 10, a6, a8); } catch (e) {}
    this.d = a9;
}
new F4(WeakMap, WeakMap, f2, 37527);
const v14 = Symbol.iterator;
class C15 extends WeakMap {
}
async function f16(a17, a18) {
    for (let [i35, i36] = (() => {
            const v21 = [4.0,9.028903280199377e+307,-696.5615132361438,-4.0,-1000.0,-1.7976931348623157e+308,1000000.0,-6.889844304250211e+307,0.833811611270902,-1.7976931348623157e+308];
            function f22(a23) {
                new Uint32Array(v21);
                return a18;
            }
            function F26(a28) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v29 = Symbol.toPrimitive;
            F26[v29] = f22;
            const v33 = {
                o(a31, a32) {
                    super[F26] = a32;
                },
                [v29]: f2,
            };
            v33.o();
            return [0, 10];
        })();
        (() => {
            i36 << i36;
            const v38 = [i36,i36,i36,i36,i36];
            const v39 = v38?.fill;
            try { new v39(v14); } catch (e) {}
            function f42(a43) {
                try { a43.valueOf(); } catch (e) {}
                const v47 = class {
                }
                v47.length;
                v47[9] = C15;
                const v51 = 10 == 0;
                v51 || v51;
                const v53 = { done: v51, value: 10 };
                return v38["indexOf"](undefined, "indexOf");
            }
            f42.f = f42;
            %OptimizeFunctionOnNextCall(f42);
            ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match().map(f42)[0];
            return i36;
        })();
        (() => {
            const v60 = i36--;
            v60 >>> v60;
        })()) {
        i36--;
    }
    await f16;
    function f66(a67, a68) {
        for (let i71 = 0, i72 = 10; i72; i72--) {
        }
        return f66.length;
    }
    f66();
    return f16;
}
function f80(a81, a82) {
    a81();
    a82();
}
f16.then = f80;
f16();
f16();
%OptimizeFunctionOnNextCall(f16);
