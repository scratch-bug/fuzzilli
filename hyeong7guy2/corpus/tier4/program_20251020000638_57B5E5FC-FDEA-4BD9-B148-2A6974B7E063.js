let v0 = 9;
let v1 = 1.0497201825143915e+308;
let v2 = "127";
const v4 = new Int8Array();
class C5 {
}
function f6() {
    function f7() {
        ({"buffer":v0,"byteLength":C5,"length":v2,...v1} = v4);
        async function* f8(a9, a10, a11, a12) {
            await f7;
            return f6;
        }
        return f8;
    }
    f7();
    return v0;
}
f6();
class C16 extends f6 {
}
new C16();
%OptimizeFunctionOnNextCall(f6);
f6();
