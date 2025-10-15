const v2 = /z(?:ab)|cde/gs;
const v20 = {
    get g() {
        return 16;
    },
    ...v2,
    call: Array,
};
