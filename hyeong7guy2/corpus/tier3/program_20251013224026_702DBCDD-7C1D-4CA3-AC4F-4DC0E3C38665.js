const v1 = [2,-8,536870889];
v1[Symbol.toPrimitive] = Date;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a6[1] = a6;
}
new F4(v1);
