// SLider

const sliderControls = document.querySelector('.slider-controls');

sliderControls.addEventListener('click', function (evt) {
  const target = evt.target;
  if (target.classList.contains('slider-controls__button') && !target.classList.contains('slider-controls__button--active')) {
    const slideId = target.dataset.slide;
    document.querySelector('.slider-controls__button--active').classList.remove('slider-controls__button--active');
    target.classList.add('slider-controls__button--active');
    document.querySelector('.slider__item--show').classList.remove('slider__item--show');
    document.querySelector(`[data-id="${slideId}"]`).classList.add('slider__item--show');
  }
});
