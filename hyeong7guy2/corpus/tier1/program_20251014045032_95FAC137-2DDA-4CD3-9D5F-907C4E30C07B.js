const v1 = [-3.0,1.0690696158863288e+308,1e-15,-647.435011225687,2.220446049250313e-16,5.638046768684799,-4.9044783142219814e+306,267042.5225379057,Infinity];
const v3 = [10030,128,10,65537,38069,64726,-1024,10,268435440];
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a7, "constructor", { writable: true, configurable: true, enumerable: true, value: Array });
    a7.concat(a8);
}
new F4(Float32Array, v1, v3);
