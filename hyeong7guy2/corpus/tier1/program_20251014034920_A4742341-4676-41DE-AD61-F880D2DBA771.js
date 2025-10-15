function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
let v2 = 7;
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
new F4(Int8Array);
({"b":F4,"f":v2,...Int8Array} = F0);
for (let i9 = 0; i9 < 100000; i9++) {
}
[F4];
