import refs from '../js/refs';
import imageCard from '../template/imgCard.hbs';


const updateMarkup = (images) => {
    let markup = imageCard(images)
    refs.gallery.insertAdjacentHTML('beforeend', markup)
}
export default updateMarkup;