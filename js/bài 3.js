function draw(m, n) {
    for (let i = 1; i < 7; i++) {
      for (let j = 1; j <= 8; j++) {
        if (
          !(
            (i == 1 && (j == 1 || j == 5 || j == 8 || j == 2)) ||
            (i == 2 && (j == 1 || j == 3 || j == 4 || j == 6 || j == 7)) ||
            (i == 3 && (j == 1 || j == 3 || j == 4 || j == 5 || j == 6 || j == 7)) ||
            (i == 4 && (j == 1 || j == 2 || j == 4 || j == 5 || j == 6 || j == 8)) ||
            (i == 5 && (j <= 3 || j >= 7 || j == 5)) ||
            (i == 6 && (j <= 4 || j >= 6))
          )
        ) {
          document.write("*");
        } else {
          document.write("<span>&nbsp;&nbsp;</span>");
        }
      }
      document.write("<br>");
    }
  }
  draw(6, 8);