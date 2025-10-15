[38824,127];
const v14 = {
    construct(a3, a4) {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            this.f = -256;
            for (let v8 = 0; v8 < 5; v8++) {
                v8 < 20000;
            }
            function f11() {
            }
            f11.bind();
        }
        new F5();
        return a3;
    },
};
const handler = v14;
function f17() {
}
const v18 = new Proxy(f17, handler);
const v53 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
const t22 = WebAssembly.Module;
const v56 = new t22(v53);
const t24 = WebAssembly.Instance;
new t24(v56);
for (let v59 = 0; v59 < 250; v59++) {
    const v61 = [1];
    Reflect.construct(v18, v61);
    v61[0];
}
