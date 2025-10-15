function f1() {
    for (let v2 = 0; v2 < 5; v2++) {
        const v3 = [-9007199254740991,5,-1734855180,-16,-20203,1,11,-4294967296];
        let v4 = 0;
        for (let i = 0; i < 5; i++) {
            v3.length = v4;
            v4++;
        }
    }
    return f1;
}
WeakSet.constructor = f1;
const t12 = WeakSet.constructor;
t12();
