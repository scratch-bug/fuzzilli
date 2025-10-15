function f0() {
    return Array(1048576).shift();
}
({ next: f0 }).next();
