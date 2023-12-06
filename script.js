//для панели навигации
window.addEventListener('load', function() {
    var links = document.getElementsByTagName('a');
    
    for (var i = 0; i <links.length; i++) {
      links[i].addEventListener('mouseover', function() {
        this.style.color = '#66fcf1';
      });
      
      links[i].addEventListener('mouseout', function() {
        this.style.color = '';
      });
    }
  });

  // простраство в продуке заполняяется черным при наведении и меняется цвет текста 
var products = document.getElementsByClassName("product");

for (var i = 0; i <products.length; i++) {
  products[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "#0B0c10";
    this.style.color = "#66FCF1";
  });

  products[i].addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.color = "";
  });
}
  