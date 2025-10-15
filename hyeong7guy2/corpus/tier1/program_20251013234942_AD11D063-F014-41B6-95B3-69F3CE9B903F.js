[2.3359327802760337,-477157.59484034416,821884.857976909,1.0,-1000.0,744.3294525695183,1000000000000.0,-8.048747996826817];
for (let v5 = 0; v5 < 100; v5++) {
}
WebAssembly.name = WebAssembly;
function f7() {
}
function F9() {
    if (!new.target) { throw 'must be called with new'; }
}
new F9();
function F12() {
    if (!new.target) { throw 'must be called with new'; }
}
class C15 {
}
function f17(a18, a19) {
    a18.toISOString = a18;
}
for (let i21 = 0; i21 < 20000; i21++) {
    const v29 = i21 ? {} : Object;
    f17(v29, {}, 0);
}
const v32 = {};
function F34(a36) {
    if (!new.target) { throw 'must be called with new'; }
    const v45 = {
        construct(a38, a39) {
            function F40() {
                if (!new.target) { throw 'must be called with new'; }
                this.f = -256;
                for (let v43 = 0; v43 < 5; v43++) {
                }
            }
            new F40();
            return a38;
        },
    };
    const handler = v45;
    function f47() {
    }
    const v48 = new Proxy(f47, handler);
    WebAssembly.Module;
    for (let v60 = 0; v60 < 250; v60++) {
        Reflect.construct(v48, [1]);
    }
}
new F34();
class C66 {
}
