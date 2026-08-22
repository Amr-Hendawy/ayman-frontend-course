// Trapezoid area clac

function trapezoid(a, b, h) {
  let base = a + b;
  let area = (base / 2) * h;

  return area;
}

console.log(trapezoid(10, 30, 15));
