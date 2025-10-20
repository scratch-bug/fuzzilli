class C2 extends Float32Array {
}
const v3 = new C2();
class C4 {
}
class C5 extends C4 {
}
const v6 = class {
}
for (let v7 = 0; v7 < 50; v7++) {
    const v8 = class {
        static Tag = "bind";
    }
}
for (let v9 = 0; v9 < 5; v9++) {
}
const v13 = Symbol.iterator;
const v22 = {
    [v13]() {
        let v15 = 10;
        v3[6] >>>= v15;
        v15--;
        const v19 = {
            next() {
                return { done: v15 };
            },
        };
        function f20() {
            return v13;
        }
        f20.a = f20;
        const v21 = { [Symbol]: f20 };
        return v19;
    },
};
const v25 = new Int16Array();
function f26() {
    let v27;
    try { v27 = new Date(WeakSet, Date, 882, ...v25, ...v22); } catch (e) {}
    -428404919 >>> v27;
    class C30 {
    }
    const v31 = Symbol.replace;
    C30[v31] = v31;
    return C30;
}
f26();
f26();
%OptimizeFunctionOnNextCall(f26);
f26();
