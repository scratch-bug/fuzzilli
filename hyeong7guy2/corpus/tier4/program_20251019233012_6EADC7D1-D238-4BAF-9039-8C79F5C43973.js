const v0 = {};
function f2() {
    return f2;
}
const v3 = new Proxy(f2, v0);
%PretenureAllocationSite(v3);
