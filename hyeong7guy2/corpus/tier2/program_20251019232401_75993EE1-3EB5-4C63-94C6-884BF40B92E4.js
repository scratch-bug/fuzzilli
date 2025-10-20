function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i = 0; i < 5; i++) {
        const v26 = {
            construct(a4, a5) {
                const v7 = Intl.DateTimeFormat;
                const v12 = v7("os", { numberingSystem: "hanidec" }).format();
                function F13() {
                    if (!new.target) { throw 'must be called with new'; }
                    this.toJSON = -23399;
                    this.d = -1024;
                }
                const v16 = new F13();
                const v18 = /(?<a>)/dusygmi;
                v18.toJSON = 4867;
                const v19 = [v18,v16];
                const v20 = { arguments: v19 };
                v20.toJSON = v12;
                const v22 = JSON.stringify(v20);
                const v23 = JSON.parse;
                v23.apply(JSON, [v22]);
                return -23399;
            },
        };
        v26.construct(-23399, F0);
    }
}
new F0();
function f29(a30) {
    return a30;
}
WebAssembly.instantiateStreaming().catch(f29);
