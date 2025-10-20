function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = class {
    }
    let v6 = 250;
    for (let i8 = 0;
        i8 < 20000;
        (() => {
            i8++;
            try {
            } catch(e13) {
            } finally {
                let v14 = 0;
                do {
                    v5[13];
                    v14++;
                } while ((() => {
                        const v19 = v6++;
                        Math.atan(v14);
                        -v19;
                        return v14 < 4;
                    })())
            }
        })()) {
    }
}
new F0();
