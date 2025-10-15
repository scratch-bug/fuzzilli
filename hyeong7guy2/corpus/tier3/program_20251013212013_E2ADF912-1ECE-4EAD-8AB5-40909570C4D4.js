try {
    function f0(a1) {
        return a1.concat([]);
    }
    let v4 = false;
    for (let i6 = 0; i6 < 25000; i6++) {
        if (i6 === 24999) {
            v4 = true;
        }
        const v16 = [1.1];
        if (v4) {
            try { Object.setPrototypeOf(); } catch (e) {}
        }
        try { f0(v16); } catch (e) {}
    }
} catch(e20) {
}
