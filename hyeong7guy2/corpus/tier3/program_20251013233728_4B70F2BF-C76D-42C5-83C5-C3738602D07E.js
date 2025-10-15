function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
F0.prototype = F0;
F0.d = F0;
class C3 extends F0 {
}
let v4 = {};
({"prototype":v4,} = Object);
v4.a = {};
