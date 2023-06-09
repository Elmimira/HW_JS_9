function pow(num, degree) {
    if (degree === 0) {
    return 1;
    } else if (degree < 0) {
    return 1 / pow(num, -degree);
    } else if (degree % 2 === 0) {
    const temp = pow(num, degree / 2);
      return temp * temp;
    } else {
      return num * pow(num, degree - 1);
    }
}
alert( pow(9,2));
alert( pow(9,1));
alert( pow(9,0));