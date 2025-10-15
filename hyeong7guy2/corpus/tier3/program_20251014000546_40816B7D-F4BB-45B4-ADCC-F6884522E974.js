function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = [4];
const v4 = [F0,F0];
Reflect.apply(v2.concat, F0, v4);
