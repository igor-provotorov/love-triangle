/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
    let result = 0;

    for (let n = 0; n < preferences.length; n++) {
        if (preferences[n] != n + 1) {

            if (preferences[preferences[n] - 1] != n + 1 && preferences[preferences[n] - 1] != preferences[n]) {

                if (preferences[preferences[preferences[n] - 1] - 1] == n + 1) {
                    result++;
                }
            }
        }
    }
    return result / 3;
};
