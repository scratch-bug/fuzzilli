class C1 {
}
const v54 = {
    construct(a3, a4) {
        new Int8Array(1065172329);
        for (let v9 = 0; v9 < 5; v9++) {
            for (let v11 = 0; v11 < 5; v11++) {
                const v50 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,v11,3,16,109,112,0,0,7,10,1,6,v11,101,95,v11,120,112,0,0]);
                WebAssembly.compile(v50);
            }
        }
        return Reflect;
    },
};
v54.construct();
function f57() {
}
const v58 = new Proxy(f57, v54);
Reflect.construct(v58, []);
