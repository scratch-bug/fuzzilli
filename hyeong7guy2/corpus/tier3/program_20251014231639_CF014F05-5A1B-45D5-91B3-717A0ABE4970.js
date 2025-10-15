function f1() {
    return 153;
}
this.toString = f1;
this.hasOwnProperty(this);
