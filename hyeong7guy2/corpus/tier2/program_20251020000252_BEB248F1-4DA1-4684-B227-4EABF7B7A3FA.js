const v0 = [2.4108082532991067e+307];
function f1() {
    return v0;
}
const v4 = new Proxy(v0, { preventExtensions: f1 });
try { Object.seal(v4); } catch (e) {}
