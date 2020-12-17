
import '../src/css/styles.css';
import addToMarkup from '../src/js/addMarkUp';
import fetchImages from '../src/js/apiService';
import refs  from '../src/js/refs';


const API_KEY = '19534964-3b894cbb98b7a7b0f6f1cef4d';

let inputValue; 
let page = 1;
refs.buttonLoad.style.display = "none";

const getSubmitButton = (event) => {
    event.preventDefault();
    refs.gallery.innerHTML = '';
    inputValue = event.target.elements.query.value;
    if (inputValue.length > 1) {
        fetchImages(inputValue, page, API_KEY)
            .then(images =>{
                console.log(images)
                if (images.length == false) {
                    refs.buttonLoad.style.display = "none";
                    alert('You wrote nonsense! =)')
                }
                else {
                    addToMarkup(images)
                    refs.buttonLoad.style.display = "block";  
                }
            })

        .catch(err => console.log(err))
    }
   
}

refs.form.addEventListener('submit', getSubmitButton)

const loadMoreButton = () => {
 
    page += 1;
   fetchImages(inputValue, page, API_KEY)
    .then(images => {
            console.log(images)
            addToMarkup(images)
            window.scrollTo({
                top: document.documentElement.offsetHeight - 1300,
                // top: document.documentElement.clientWidth,
                behavior: 'smooth'
            });
        })
        .catch(err => console.log(err))
   
}


  

  

  

refs.buttonLoad.addEventListener('click', loadMoreButton )
