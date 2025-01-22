const pi = 3.14;
let radius = 6.378e+10;
let circumference = 2 * pi * radius;
let surfaceArea = 4 * pi * (radius ** 2);
let volume = 4 / 3 * pi * (radius ** 3);

document.write("The radius of the sphere is: " + radius + ".");
document.write("<br>The circumference of the sphere is: " + circumference + ".");
document.write("<br>The surface area of the sphere is: " + surfaceArea + ".");
document.write("<br>The volume of the sphere is: " + volume + ".");
