Symbol.iterator;
function f6() {
    return -4294967297;
}
globalThis.obj;
[456.6273520076486,4.0,-7.944749415305164e+307];
function f14() {
    return 127;
}
const v15 = class extends f14 {
    set a(a17) {
    }
    #b;
}
new Int32Array(1000);
function f22() {
}
({}).next;
function F25(a27) {
    if (!new.target) { throw 'must be called with new'; }
}
new F25();
const v29 = {};
function f30(a31, a32) {
    Reflect.construct(a32, a31);
}
const v57 = {
    construct(a37, a38) {
        function F39() {
            if (!new.target) { throw 'must be called with new'; }
            this.f = -256;
            function f42(a43) {
                for (let i45 = 0; i45 < 20000;) {
                }
            }
            function f51() {
                return f51;
            }
        }
        new F39();
        return Reflect.construct(a37, a38);
    },
};
const handler = v57;
function f60() {
}
const v61 = new Proxy(f60, handler);
const proxy = v61;
try {
    -4294967297 < 127;
    const v74 = {};
    const v75 = {};
    for (let v77 = 0; v77 < 5; v77++) {
    }
    const v78 = {};
} catch(e79) {
}
for (let v80 = 0; v80 < 250; v80++) {
    f30([1,2], proxy);
}
Symbol.iterator;
for (let i100 = 0; i100 < 20000; ++i100) {
    const v106 = {};
}
f30([0], proxy);
