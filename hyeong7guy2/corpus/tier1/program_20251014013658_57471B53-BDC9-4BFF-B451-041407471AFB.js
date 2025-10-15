const v0 = [-1.0,-1e-15,1000000.0,-1000000000.0,0.41956349634434864];
const v1 = [v0,v0,v0];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a4, 3, { writable: true, configurable: true, value: a4 });
    a5[4] = this;
}
new F2(v1, v1);
new F2(v1, v0);
