const v0 = [-Infinity,-1.3732131131445796e+308,6.318487400040212,-1000000000000.0,0.7110294938859892,1.0,208901.7668406295,-3.0,1e-15];
v0[2] = v0;
function f1() {
    const v7 = {
        construct(a3, a4) {
            new Int8Array(v0);
            return a3;
        },
    };
    v7.construct();
    return v7;
}
const t12 = ({ construct: f1 }).construct;
t12();
