function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new Date();
v6.setFullYear(1, 536870888, 536870888);
const v8 = new Date();
v8.setUTCMilliseconds(F0);
