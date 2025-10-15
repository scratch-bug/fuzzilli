/a\S/imugyd;
function f1() {
    return f1;
}
class C2 {
    get b() {
        class C4 extends f1 {
            #n(a6, a7) {
                try {
                    f1();
                } catch(e9) {
                }
                return f1;
            }
        }
        new C4();
        new C2();
        new C4();
        new C4();
        return C4;
    }
}
new C2();
const v15 = {};
class C16 {
    set f(a18) {
    }
}
const v19 = new C2();
const v20 = v19?.constructor;
try { new v20(); } catch (e) {}
const v22 = new C2();
const v23 = v22?.constructor;
try { new v23(); } catch (e) {}
const v25 = new C2();
Symbol.for(Symbol.iterator.description);
const v39 = {
    [v25]() {
        let v32 = 10;
        const v38 = {
            next() {
                v32--;
                const v36 = v32 == 0;
                return { done: v36, value: v32 };
            },
        };
        return C2;
    },
};
new Int8Array(16);
for (let i46 = 0;
    (() => {
        const v47 = -2;
        v47 & v47;
        const v50 = i46 < 1000;
        !v47;
        return v50;
    })();
    (() => {
        const v53 = i46++;
        const v66 = {
            p(a55, a56, a57, a58) {
                a55++;
                a56 ?? a56;
                a57 ?? a57;
                a55 / a55;
                ~(+a58);
                ++Int16Array;
            },
        };
        try { v66.__defineSetter__(v53, C16); } catch (e) {}
        v66.p(2);
    })()) {
    i46 - i46;
}
