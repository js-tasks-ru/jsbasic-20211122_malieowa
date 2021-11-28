function factorial(n) {
  var fac = 1;
  while (n--) {
    fac = fac * (n + 1);
     }
return fac;
}

factorial(0);
factorial(1);
factorial(3);
factorial(5);