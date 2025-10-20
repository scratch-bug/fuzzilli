const v0 = [10,1000,10,4,-2147483649,-65535];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    v0["unshift"](v0, F1);
    v0.length = 43;
}
new F1();
new F1();
