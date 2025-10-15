class C0 {
}
const v1 = new C0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
new F2(v1, v1);
const v7 = class {
}
new v7();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function F13() {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C15 {
    }
    const v16 = new C15();
    function F17(a19, a20) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = F13;
    }
    new F17(C15, v16);
    class C22 extends C15 {
    }
    const v23 = new C22();
    const v24 = v23?.constructor;
    try { new v24(); } catch (e) {}
    const v26 = [-1.7976931348623157e+308,666504.888402357,170.1380915468203,1000000000000.0,1e-15,-1000000.0];
    function f27() {
    }
    class C28 extends f27 {
    }
    const v29 = /[a+?Q2l\u{12345}\u{23456}5xyz{0,1}?]/iugy;
    const v30 = class {
    }
    class C31 {
    }
    const v32 = new C31();
    const v33 = v32?.constructor;
    try { new v33(); } catch (e) {}
    const v35 = class extends C31 {
    }
    function F36(a38) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F36();
    function f41() {
    }
    class C42 {
    }
    const v43 = {};
    for (let v44 = 0; v44 < 5; v44++) {
    }
    v29 % v26;
    const v46 = { call: f41 };
    for (let v47 = 0; v47 < 50; v47++) {
        let v48 = v47 % v47;
        v48--;
        const v50 = {};
        for (const v51 in "boolean") {
        }
        class C52 {
        }
        const v53 = {};
        const v54 = {};
        const v56 = class {
        }
        const v57 = new v56();
        function f59() {
        }
        function f60() {
            function f61() {
                return { done: true };
            }
            f61.call(v57);
            return { next: f61 };
        }
        const v66 = Symbol.iterator;
        f59.bind(null, ...{ [v66]: f60 });
        const v73 = ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match(/../g);
        const v74 = {};
        function f76(a77, a78) {
        }
        for (const v80 of v73) {
        }
        const v81 = new Uint16Array(173);
        const v82 = v81[28];
        v82 >> v82;
    }
    for (let v84 = 0; v84 < 5; v84++) {
        function f85() {
        }
    }
    for (const v86 of "boolean") {
    }
}
new F9();
