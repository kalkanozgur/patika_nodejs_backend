function circleArea(r) {
    const area = Math.PI * r ** 2;
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`);
  }
  function circleCircumference(r) {
    const circumference = 2 * Math.PI * r;
    console.log(`Yarıçapı ${r} olan dairenin çevresi: ${circumference}`);
  }
  
  module.exports = { circleArea, circleCircumference };