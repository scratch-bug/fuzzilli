for (let i2 = 0, i3 = 129;
    i3;
    (() => {
        async function f6() {
            const v33 = new Uint8Array([0,97,115,109,1,0,0,0,1,14,2,95,1,100,-5,0,96,1,111,1,127,3,2,1]);
            try {
                await WebAssembly.instantiate(v33);
            } catch(e37) {
            }
            return 1;
        }
        f6();
        i3--;
    })()) {
}
