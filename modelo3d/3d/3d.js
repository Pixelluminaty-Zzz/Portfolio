const model = document.querySelector('#modelo-fondo');

window.addEventListener('scroll', () => {
  const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = window.scrollY / totalScroll;
  
  const rotation = percentage * 360;
  const rotationx = percentage * 60;
  
  model.cameraOrbit = `${rotation}deg ${rotationx}deg`;
});

window.addEventListener('scroll', function(){
  let scrollPosition = window.pageYOffset;
  let scaleValue = 1 + scrollPosition/1500
  document.querySelector('#modelo-fondo').style.transform = `scale(${scaleValue})`;
});