function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = [100,F0];
v4.constructor = {};
v4.concat();
