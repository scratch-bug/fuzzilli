function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [F0,F0,v2];
function f5(a6, a7, a8) {
    function f10(a11) {
        const v12 = class {
            c;
        }
        return a8;
    }
    this.onmessage = f10;
    return a8;
}
const v15 = [Map,Map,v3];
new Worker(f5, { arguments: v15, type: "function" });
