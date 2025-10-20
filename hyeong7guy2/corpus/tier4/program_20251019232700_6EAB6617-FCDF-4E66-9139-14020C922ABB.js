for (let i1 = 3;
    i1 < 20000;
    (() => {
        i1++;
        let v7;
        try { v7 = new Uint8ClampedArray(); } catch (e) {}
        v7?.buffer;
    })()) {
}
