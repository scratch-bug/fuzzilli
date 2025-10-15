with ([-2147483648,128,-28356,536870912,-9007199254740992,0,-128,-2,1024]) {
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v6 = 0; v6 < 100; v6++) {
    function F8(a10) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v11 = class extends Int16Array {
        p(a13, a14, a15, a16) {
            F8++;
        }
    }
    let v18 = v6 | v6;
    v18--;
    const v21 = {
        [Symbol]() {
            v6 = this;
        },
    };
}
