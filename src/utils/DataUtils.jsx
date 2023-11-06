export const contains = (arrays, element) => {
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] === element) {
            return true;
        }
    }
    return false;
}