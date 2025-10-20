const v2 = [6];
Object.preventExtensions(v2);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    v2.length = 738;
}
new F5();
