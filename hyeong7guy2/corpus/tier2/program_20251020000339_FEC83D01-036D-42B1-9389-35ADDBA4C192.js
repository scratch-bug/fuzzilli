const v1 = class extends Array {
}
const v3 = [-9007199254740990,56648,256,1073741824,11,257,60789,-25780,-65535,-10740];
function f4() {
}
const v6 = class extends f4 {
}
const v7 = new v6();
function f8() {
    return v1;
}
const v12 = Symbol.iterator;
const v36 = {
    [v12]() {
        const v26 = {
            next() {
                const v16 = this?.__defineSetter__;
                try { new v16(Int32Array); } catch (e) {}
                for (const v18 of "7") {
                    let v19;
                    try { v19 = v18.link(v1); } catch (e) {}
                    v19[10];
                    const v21 = v12;
                }
                function f22(a23) {
                    return a23;
                }
                class C24 extends f22 {
                }
                v7.h %= 10;
                return { done: 10 };
            },
        };
        const v27 = v26.__lookupGetter__;
        v27.toString();
        try { v27(); } catch (e) {}
        Map.prototype = Map;
        const v31 = new Map();
        const v32 = v31.values();
        try { v32.drop(v3); } catch (e) {}
        let v34;
        try { v34 = v32.reduce(f8); } catch (e) {}
        v32.next(v32, v32, v34);
        return v26;
    },
};
function f38() {
    new Date(WeakSet, Date, 882, ...v36, ...v36);
    return 882;
}
f38();
f38.call();
%OptimizeFunctionOnNextCall(f38);
f38();
