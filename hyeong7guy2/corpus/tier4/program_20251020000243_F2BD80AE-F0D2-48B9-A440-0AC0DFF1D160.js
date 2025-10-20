try {
    function F0(a2) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v3 = class extends F0 {
        static {
            [..."cX7",...1];
        }
        static {
        }
    }
} catch(e9) {
}
