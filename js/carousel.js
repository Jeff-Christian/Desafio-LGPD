//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image, title, url){
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.image();
                Carousel.title();
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static image(){

        for(let i = 0; i < carouselArr.length; i++){
            let divImagem = document.querySelector('#slide');
            let img = document.createElement('img');

            img.src = carouselArr[i].image;
            img.classList.add('img-active');
            divImagem.appendChild(img);
        }

    }

    static title(){

        for(let i = 0; i < carouselArr.length; i++){
            let divTitle = document.querySelector('#slide-title');
            let title = document.createElement('a');

            title.innerHTML = carouselArr[i].title;
            title.href = carouselArr[i].url;
            title.classList.add('title');
            divTitle.appendChild(title);
        }

    }

    static Next(){
        
        let active = document.querySelectorAll('.img-active');
        let title = document.querySelectorAll('.title');

        function addClass(){
            active[Carousel._sequence].style.display = 'none';
            title[Carousel._sequence].style.display = 'none';
    
            Carousel._sequence++;
            if(Carousel._sequence == Carousel._size){
                Carousel._sequence = 0;
            }
            
            active[Carousel._sequence].style.display = 'block';
            title[Carousel._sequence].style.display = 'block';
        }

        addClass();
    }
};
