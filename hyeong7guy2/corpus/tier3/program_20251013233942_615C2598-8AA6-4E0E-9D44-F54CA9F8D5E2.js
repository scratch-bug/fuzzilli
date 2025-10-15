function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
class C3 extends F0 {
    get b() {
        if (false) {
        }
    }
}
new C3();
new C3();
/IC/gs.constructor;
for (let v13 = 0; v13 < 1000; v13++) {
    ++v13;
    function f15(a16) {
    }
    const v19 = class extends Map {
    }
    const v21 = class extends Date {
    }
    for (let v22 = 0; v22 < 25; v22++) {
        v22 < v13;
    }
}
