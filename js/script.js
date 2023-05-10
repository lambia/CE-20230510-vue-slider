const { createApp } = Vue

createApp({
    data() {
        return {
            currentSlide: 0,
            autoScroll: null,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        prevSlide() {
            //La slide 0 non può tornare indietro ma riparte dal lato opposto
            if(this.currentSlide>0) {
                this.currentSlide--;
            } else {
                this.currentSlide = this.slides.length - 1;
            }
        },
        nextSlide() {
            //L'ultima slide (length-1) deve ripartire dal lato opposto
            if(this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0;
            }
        },
        changeSlide(i) {
            this.currentSlide = i;
        },
        //metodo non usato attualmente (controllate nell'html)
        // il metodo va chiamato così --> :class="getSlideClass(i)"
        getSlideClass(i) {

        //  Versione estesa con if
        //     let result = "";

        //     if(i == this.currentSlide) {
        //         result = "active";    
        //     }

        //     return result;

        //  Versione concisa con ternario
            return (i == this.currentSlide) ? "thumb active" : "thumb";
        },
        stopAutoplay() {
            clearInterval( this.autoScroll );
            this.autoScroll = null;
        },
        startAutoplay() {
            // this.autoScroll = setInterval(()=>{
            //     this.nextSlide();
            // }, 1000);
        }
    },
    mounted() {
        console.log("App montata", this.slides);

        this.startAutoplay();
    }
}).mount("#app");