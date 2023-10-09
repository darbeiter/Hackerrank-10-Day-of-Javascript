function getMaxLessThanK(n, k) {
    let max = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            const current = a & b;
            if (current < k && current > max) {
                max = current;
            }
        }
    }
    return max;
}
