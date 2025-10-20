let v1 = 10;
v1--;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            a9 ?? a9;
            a9 ?? a9;
            [0,97,115,109,1,0,0,0,1,10,2,96,1,124,1,124,96,1,124,1,124,3,3,4096,0,1,7,5,1,1,102,0,1,10,77,v1,11,v1,v1,13,124,4096,111,4096,126,65,3,33,15,208,107,32,0,4,64,111,124,2,64,32,15,65,1,4096,33,15,4,64,124,32,15,69,3,32,17,11,5,16,0,32,17,26,32,4096,32,17,68,0,0,4096,0,0,0];
            return 1;
        }
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v97 = new F3();
class C98 {
    static [v97](a100, a101, a102) {
    }
    static [v97](a104, a105, a106) {
    }
}
