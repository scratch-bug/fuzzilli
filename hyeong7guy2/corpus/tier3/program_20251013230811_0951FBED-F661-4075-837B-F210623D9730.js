try {
} finally {
    const v0 = {};
    let v1 = false;
    for (let i3 = 0;
        i3 < 25000;
        (() => {
            function F7(a9, a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            i3++;
        })()) {
        v1 ? v0 : {};
        v1 = true;
    }
}
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
}
F17.propertyIsEnumerable(F17, F17, F17, F17);
