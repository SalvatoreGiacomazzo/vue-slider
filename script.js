const { createApp } = Vue;

createApp({
    data() {
        return {
            activeIndex: 0,
            games: [ //Array di oggetti che con tiene foto del gioco, titolo e descrizione
                {
                    imageSource: './img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    imageSource: './img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    imageSource: './img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    imageSource: './img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    imageSource: './img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],
        }
    },
    methods: {
        increaseIndex: function () {  //Funzione che regola l'aumento dell'indice games[0] e che quindi mostra la slide successiva
            if (this.activeIndex === this.games.length - 1) {   //If che regola il loop
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },
        decreaseIndex: function () { //Funzione che regola il decremento dell'indice games[0] e che quindi mostra la slide precedente
            if (this.activeIndex === 0) {        //If che regola il loop
                this.activeIndex = this.games.length - 1
            } else {
                this.activeIndex--;
            }

        }
    }
}).mount('#app')






