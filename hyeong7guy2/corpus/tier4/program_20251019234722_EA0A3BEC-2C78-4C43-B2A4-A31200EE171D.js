const v1 = [0,0];
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Object.freeze(a4);
    Object.getOwnPropertyDescriptors(v1);
}
new F2(v1);
