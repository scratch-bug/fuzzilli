class R1 {
    constructor() { this.p = 1.1; }
    m() { this.p = 2.2; }
}

class R2 {
    constructor() { this.p = {}; }
    m() { this.p = { z: 1 }; }
}

function victim(r) {
    R1.prototype.m.call(r);
}

for (let i = 0; i < 100000; i++) {
    victim(new R1());
}

victim(new R2());