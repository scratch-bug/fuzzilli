function f0() {
    Array.fromAsync().then(Array, Array);
}
({ next: f0 }).next();
