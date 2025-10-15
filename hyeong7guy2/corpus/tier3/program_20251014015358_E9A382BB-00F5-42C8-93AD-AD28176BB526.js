const v1 = class {
}
const v2 = [v1,false];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
try { Object.defineProperties(F4, v2); } catch (e) {}
Object.freeze(Object);
const v12 = Intl.DisplayNames;
try { v12.apply(Int32Array, Object); } catch (e) {}
