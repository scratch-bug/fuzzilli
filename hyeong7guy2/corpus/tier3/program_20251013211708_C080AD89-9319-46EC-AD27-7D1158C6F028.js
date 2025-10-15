function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
try { F0.toJSON(F0); } catch (e) {}
%VerifyType(F0);
/\P{scx=Greek}/id;
class C6 {
}
C6.g += -9223372036854775807;
for (let v7 = 0; v7 < 5; v7++) {
    let v8 = 2;
    const v11 = {
        [Symbol]() {
            v8 = this;
        },
    };
}
