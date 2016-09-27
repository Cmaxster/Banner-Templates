// @author: Chad Elston
var t1 = new TimelineLite();
function initializeBanner() { setupBanner(); }
function setupBanner() {
    document.getElementById('banner').addEventListener('click',onClickTag);
	animateBanner();
}
function animateBanner() { 
    t1.to(copy1, 1.75, {opacity:1})
    .to(copy2, 1.75, {opacity:1}, '-=1')
    .to(hero, 0.75, {left:0},'-=0.5')
    .to(cta, 0.75, {opacity:1}, '+=0.15')
}