try {
    function f1() {
        return Uint8ClampedArray;
    }
    function f2(a3) {
        const v4 = [a3,a3,a3];
        let v5 = () => {
            if (a3) {
                v4[0] = 1.1;
            }
            v5 = f1;
            return f1;
        };
        let v7;
        try { v7 = v4.push(v5); } catch (e) {}
        return v7;
    }
    for (let i9 = 0;
        (() => {
            let v11 = 0;
            while (v11 < 3) {
                const v14 = v11++;
                try { new Uint8ClampedArray(v14); } catch (e) {}
            }
            return i9 < 25000;
        })();
        i9++) {
        try { f2(f1); } catch (e) {}
    }
} catch(e21) {
}
