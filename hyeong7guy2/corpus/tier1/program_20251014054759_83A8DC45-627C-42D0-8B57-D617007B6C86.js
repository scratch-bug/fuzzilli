new Uint16Array(128);
[0.3416093389246042,3.7137100496281424e+307,858559.3011402062,692702.2661347396,-Infinity,1.7976931348623157e+308,839.7427977257294];
class C5 {
}
function f6() {
    class C7 {
    }
    return C7;
}
C5[Symbol.toPrimitive] = f6;
function f10(a11) {
    return 4;
}
C5.toString = f10;
const v12 = new C5();
function f13() {
    function f14(a15) {
        let v16 = -4294967297;
        const v17 = v16++;
        let v18 = false;
        function f19(a20) {
            const v21 = ~a20;
            const v22 = v17 ?? a20;
            const v23 = v22 + v22;
            if (v18) {
                v22(v23, v21, a20, v16, a20);
            }
            return f19;
        }
        try {
            f19();
            v18 = true;
        } catch(e27) {
        }
        return f10;
    }
    return f14;
}
Object.defineProperty(v12, "constructor", { get: f13 });
const v28 = v12?.constructor;
function f29() {
    class C30 {
    }
}
v28[Symbol.toPrimitive] = f10;
try { new v28(); } catch (e) {}
const v37 = {
    construct(a35, a36) {
    },
};
function f39() {
}
const v40 = new Proxy(f39, v37);
try { Reflect.defineProperty(f39, C5, v40); } catch (e) {}
