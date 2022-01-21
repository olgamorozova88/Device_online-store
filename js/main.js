// Promo SLider

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

// Features Slider

const featuresControls = document.querySelector('.features__controls');

featuresControls.addEventListener('click', function (evt) {
  const target = evt.target;
  if (target.classList.contains('features__control') && !target.classList.contains('features__control--active')) {
    const featureId = target.dataset.feature;
    document.querySelector('.features__control--active').classList.remove('features__control--active');
    target.classList.add('features__control--active');
    document.querySelector('.features__item--active').classList.remove('features__item--active');
    document.querySelector(`[data-id="${featureId}"]`).classList.add('features__item--active');
  }
});

// Modal-map

const mapShow = document.querySelector('.about__map');
const map = document.querySelector('.modal-map');

mapShow.addEventListener('click', function(evt) {
  evt.preventDefault();
  map.classList.add('modal-map--show');
});

// Feedback-form

const feedbackShow = document.querySelector('.about__button--popup');
const feedback = document.querySelector('.modal-form');
let formInput = document.querySelectorAll('.form__input');

feedbackShow.addEventListener('click', function() {
  feedback.classList.add('modal-form--show');
});

// Form validation

const submitForm = document.querySelector('.form__button');
const form = document.querySelector('.form');

submitForm.addEventListener('click', function(evt) {
  if (!formInput[0].value || !formInput[1].value || !formInput[2].value) {
    evt.preventDefault();
    form.classList.remove("form--error");
    feedback.classList.remove("modal-form--error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form--error");
    feedback.classList.add("modal-form--error");
  }
});

// Close modal

const modalClose = document.querySelectorAll('.modal-close');

modalClose[0].addEventListener('click', function() {
  map.classList.remove('modal-map--show');
});
modalClose[1].addEventListener('click', function() {
  feedback.classList.remove('modal-form--show');
  feedback.classList.remove("modal-form--error");
  form.classList.remove("form--error");
  form.reset();
});

window.window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    map.classList.remove('modal-map--show');
    feedback.classList.remove('modal-form--show');
    form.reset();
  }
});
