try {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        try { this.constructor(a5, a4); } catch (e) {}
        a5 % a5;
        const v8 = this?.__lookupSetter__;
        try { v8.bind("a"); } catch (e) {}
        try { new v8(a4); } catch (e) {}
        a5 % a5;
        try { this.a = a5; } catch (e) {}
    }
    try { new F2("a", 9007199254740992); } catch (e) {}
    F2?.length;
    let v14;
    try { v14 = new F2(F2, 9007199254740992); } catch (e) {}
    try { new F2(F2, v14); } catch (e) {}
    let v16;
    try { v16 = new F2(F2, F2); } catch (e) {}
    let v17;
    try { v17 = new F2(F2, v14); } catch (e) {}
    try { v17.b = v17; } catch (e) {}
    const t21 = "t0";
    t21[1] = "t0";
    let v20;
    try { v20 = new WeakSet(); } catch (e) {}
    let v21;
    try { v21 = v20.add("t0"); } catch (e) {}
    v21 ?? v21;
    4 >> 4;
    4 >>> 4;
    let v26 = 1073741825;
    ~v26;
    const v28 = v26--;
    const v32 = Symbol?.iterator;
    const v51 = {
        [v32]() {
            const v34 = this?.__lookupGetter__;
            try { new v34("t0"); } catch (e) {}
            const v40 = {
                next() {
                    try { this.next(); } catch (e) {}
                    return { done: -1 };
                },
            };
            let v42;
            try { v42 = Math.trunc(v16); } catch (e) {}
            v42 - v42;
            let v44;
            try { v44 = Math.min(v26); } catch (e) {}
            v44 - v44;
            const v46 = v44--;
            v46 ^ v46;
            const v48 = ~v44;
            v48 / v48;
            v48 - v48;
            return v40;
        },
    };
    try { v51.g = v51; } catch (e) {}
    const v53 = 882 % 882;
    v53 >> v53;
    function f55() {
        let v56;
        try { v56 = new Date(WeakSet, Date, 882, ...v51, ...v51); } catch (e) {}
        return v56;
    }
    f55?.name;
    let v58;
    try { v58 = f55(); } catch (e) {}
    const v59 = v58?.setFullYear;
    try { new v59(v58, Symbol, v32); } catch (e) {}
    let v61;
    try { v61 = f55.call(v32, v26, v28); } catch (e) {}
    try { v61.getUTCHours(); } catch (e) {}
    %OptimizeFunctionOnNextCall(f55);
    try { f55(); } catch (e) {}
    let v65;
    try { v65 = Int32Array.from(Int32Array); } catch (e) {}
    v65[2] = v65;
    let v66;
    try { v66 = new Int32Array(4); } catch (e) {}
    v66?.[3];
    256 - 256;
    try { new Int8Array(256); } catch (e) {}
    function F74(a76, a77) {
        if (!new.target) { throw 'must be called with new'; }
        a76 + a76;
        try { a77.constructor(a77); } catch (e) {}
        try { this.constructor(882, "a"); } catch (e) {}
        let v81 = a76 + a76;
        v81--;
        function f83() {
            function f84(a85) {
                a85 ?? a85;
                function f87() {
                    const t95 = "p";
                    t95[0] = "p";
                    let v89;
                    try { v89 = ("p").link(a76, "p", f87); } catch (e) {}
                    try { v89.charCodeAt(WeakSet); } catch (e) {}
                    let v91;
                    try { v91 = v89.blink(); } catch (e) {}
                    v91?.[8];
                    for (let v93 = 0; v93 < 5; v93++) {
                        function f94(a95, a96) {
                            return f87;
                        }
                    }
                }
                try { new f87(); } catch (e) {}
                let v98;
                try { v98 = f87(); } catch (e) {}
                v98 >> v98;
                const v100 = `string${536870912n}undefined`;
                try { Symbol.prototype = Symbol; } catch (e) {}
                try { v100.normalize(); } catch (e) {}
                return a76;
            }
            try { new f84(f84); } catch (e) {}
            let v103;
            try { v103 = f84(); } catch (e) {}
            v103 / v103;
            try { f84(); } catch (e) {}
            %OptimizeMaglevOnNextCall(f84);
            return f84;
        }
        let v107;
        try { v107 = new Set(); } catch (e) {}
        const v108 = v107?.toString;
        try { new v108(); } catch (e) {}
        function F110(a112, a113) {
            if (!new.target) { throw 'must be called with new'; }
            function f114(a115, a116, a117) {
                a117 ?? a117;
                for (let v119 = 0; v119 < 5; v119++) {
                    [a115] = v107;
                }
                return F110;
            }
            try { f114(); } catch (e) {}
            let v122;
            try { v122 = eval(); } catch (e) {}
            v122 ?? v122;
            %OptimizeFunctionOnNextCall(f114);
        }
        try { new F110(WeakSet, F110); } catch (e) {}
        let v125;
        try { v125 = new F110(F110, v107); } catch (e) {}
        let v126;
        try { v126 = new F110(F110, v125); } catch (e) {}
        const v127 = v126?.constructor;
        try { new v127(v125, v107); } catch (e) {}
        const v129 = v126?.constructor;
        try { v129.call(a76); } catch (e) {}
        let v131;
        try { v131 = new v129(Set); } catch (e) {}
        try { v131.propertyIsEnumerable(v81); } catch (e) {}
        Object.defineProperty(this, "toString", { get: f83 });
    }
    let v133;
    try { v133 = new F74(536870912n, F74); } catch (e) {}
    try { v133.toString(Symbol, Symbol, v133, v133); } catch (e) {}
} catch(e135) {
}
