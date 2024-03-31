function circleArea(radius) {
    let result = Math.PI * Math.pow(radius, 2);
    return result.toFixed(2);
}

function trapeziumArea(length, breadth) {
    let result = 0.5 * (length + breadth);
    return result.toFixed(2);
}

let res = circleArea(6);
// console.log(res);


/* commonJS format
 * module.exports.circleArea = circleArea;
 * module.exports.trapeziumArea = trapeziumArea;
 */

const _circleArea = circleArea;
export { _circleArea as circleArea };
const _trapeziumArea = trapeziumArea;
export { _trapeziumArea as trapeziumArea };