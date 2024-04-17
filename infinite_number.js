let firstNumber = 50;
for (let i = 0; i < 2023 ; i++) {
    firstNumber+= i;
    document.write('<h5 style="color: darkorange">');
    document.write(i);
    document.write('</h5>');
    document.write(firstNumber);
    document.write('<br>');
}
document.write("<br>"+firstNumber);