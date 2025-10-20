for (let i2 = 0, i3 = 10; i3;) {
    i3--;
}
for (let i10 = 0;
    (() => {
        const v12 = new Map();
        function f13() {
            return v12;
        }
        ~f13;
        return i10 < 20000;
    })();
    ++i10) {
}
