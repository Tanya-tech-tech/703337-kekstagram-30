const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list')
const effectsElements = effectsList.children;

const FILE_TYPES = ['.jpg', '.jpeg'];

const uploadPicturePreview = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    preview.children[0].src = URL.createObjectURL(file);

    for(const element of effectsElements) {
      element.getElementsByTagName('span')[0].style.backgroundImage = `url('${preview.children[0].src}')`;

    }

  }
};

export {uploadPicturePreview};
