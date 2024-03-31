export function circleArea(radius) {
    let result = Math.PI * Math.pow(radius, 2);
    return result.toFixed(2);
}

export function trapeziumArea(length, breadth) {
    let result = 0.5 * (length + breadth);
    return result.toFixed(2);
}

let res = circleArea(6);
// console.log(res);