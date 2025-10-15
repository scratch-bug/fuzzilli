function F15() {
    if (!new.target) { throw 'must be called with new'; }
}
class C17 extends F15 {
}
const v18 = new C17();
const v19 = [-7];
class C20 {
}
C20[1073741825] = v19;
for (let v23 = 0; v23 < 100; v23++) {
    function F24() {
        if (!new.target) { throw 'must be called with new'; }
    }
    try { C17.with(F24, v18); } catch (e) {}
    v18.b = v18;
    C20[1073741825][0];
    function f32(a33, a34, a35) {
        class C37 {
        }
        C37.g += -9223372036854775807;
    }
    let v39 = v23 | v23;
    v39--;
    const v42 = {
        [Symbol]() {
            v23 = this;
        },
    };
}
