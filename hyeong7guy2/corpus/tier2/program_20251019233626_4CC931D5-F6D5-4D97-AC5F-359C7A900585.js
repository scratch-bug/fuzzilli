const v2 = [-3.0,1.0690696158863288e+308,1e-15,-647.435011225687,2.220446049250313e-16,5.638046768684799,-4.9044783142219814e+306,267042.5225379057,Infinity];
const v4 = [10030,128,10,65537,38069,64726,-1024,10,268435440];
const v6 = Symbol.isConcatSpreadable;
v4[v6] = v4;
Object.defineProperty(v4, "constructor", { value: Array });
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    a10[Symbol.isConcatSpreadable] = v6;
    a10[5] = a10;
}
const v13 = new F7(Float32Array, v2);
const t11 = v13.constructor;
new t11(Uint16Array, v4);
