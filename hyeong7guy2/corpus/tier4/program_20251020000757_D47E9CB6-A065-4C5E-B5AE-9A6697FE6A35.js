function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F1 {
    static {
        try {
            eval("-16:00");
        } catch(e7) {
        }
    }
}
