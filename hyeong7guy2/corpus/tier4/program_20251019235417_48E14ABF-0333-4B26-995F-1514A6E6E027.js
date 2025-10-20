const v1 = [0];
v1.shift();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    Object.freeze(a5);
    Object.values(v1);
}
new F3(v1);
