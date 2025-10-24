function cylinder(h, r){
    let areaBase = 2 * Math.PI * Math.pow(r, 2);
    let areaSide = 2* Math.PI * r * h;
    let total = areaBase + areaSide;
    return total;
}

console.log(cylinder(2, 2));