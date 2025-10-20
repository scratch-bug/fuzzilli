function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 500; v4++) {
        v4 < 25000;
        const v11 = {
            toString(a8, a9, a10) {
                return v4;
            },
        };
        let constructor = v4;
        function f13() {
        }
        for (let v14 = 0; v14 < 5; v14++) {
            constructor = constructor ^ v4;
        }
        ++v4;
    }
}
new F0();
