import { getRandomInteger } from './util';

const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');
const pictureFilter = document.querySelector('.img-filters');
const filtersForm = pictureFilter.querySelector('.img-filters__form');
const buttonsList = filtersForm.getElementsByTagName('button');
const picturesList = document.querySelector('.pictures');
const ELEMENTS_COUNT = 10;

const showFilters = () => {
  pictureFilter.classList.remove('img-filters--inactive');
};

const filteredDefault = (arr) => arr;


const filteredRandom = (arr) => {
  const arrayOfObjects = arr.map((item) => ({
    id: item.id,
    url: item.url,
    likes: item.likes,
    description: item.description,
    comments: item.comments,
  })
  );
  const arrayFilter = [];
  return function (){
    for (let i = 0; i < ELEMENTS_COUNT; i++){
      const ggg = getRandomInteger(0, arrayOfObjects.length - 1);
      const randomObject = arrayOfObjects[ggg];
      const randomElement = structuredClone(randomObject);
      const index = arrayOfObjects.indexOf(randomObject);
      arrayOfObjects.splice(index,1);
      arrayFilter.push(randomElement);
    }

    return arrayFilter;
  };
};
const clearPicturesList = () => {
  const picturesCollection = picturesList.querySelectorAll('.picture');
  for(const el of picturesCollection){
    el.remove();
  }
};
const filteredDiscussed = (arr) => {

  const arrayOfObjects = arr.map((item) => structuredClone(item));
  arrayOfObjects.sort((a, b) => b.comments.length - a.comments.length);
  return arrayOfObjects;

};
const toggleButtons = (button) => {
  for(const but of buttonsList){
    if(but.classList.contains('img-filters__button--active') && but !== button){
      but.classList.remove('img-filters__button--active');
    }
  }
};

const setDefaultClick = (cb) => {
  buttonFilterDefault.addEventListener('click', () => {
    buttonFilterDefault.classList.add('img-filters__button--active');
    toggleButtons(buttonFilterDefault);
    clearPicturesList();
    cb();
  });
};

const setRandomClick = (cb1) => {
  buttonFilterRandom.addEventListener('click', () => {
    buttonFilterRandom.classList.add('img-filters__button--active');
    toggleButtons(buttonFilterRandom);
    clearPicturesList();
    cb1();
  });
};

const setDiscussedClick = (cb2) => {
  buttonFilterDiscussed.addEventListener('click', () => {
    buttonFilterDiscussed.classList.add('img-filters__button--active');
    toggleButtons(buttonFilterDiscussed);
    clearPicturesList();
    cb2();
  });
};

export {showFilters, filteredRandom, filteredDiscussed,filteredDefault, setDefaultClick, setRandomClick, setDiscussedClick};
