const { createApp } = Vue;

const Profil = {
    name: 'Profil',
    template:
        `<div @click="$emit('add__like')" class="profil__container" :class="background">
            <div class="profil__img">
                <img :src="src__img" alt="photo profil" />
            </div>
            <div class="profil__box">
                <div class="profil__description">
                    <div class="description__box">
                        <div class="profil__text">
                            <p><strong>{{name}}</strong><span>{{text}}</span><a :class="linkImportant">{{link}}</a><span :class="redDot"></span></p>
                        </div>
                        <span>{{time}}</span>
                    </div>
                    <a v-if="src__pic != ''" class="profil__pic">
                        <img :src="src__pic" alt="photo divers">
                    </a>
                </div>
                <div v-if="text__comment != ''" class="profil__comment">
                    <p>{{text__comment}}</p>
                </div>
            </div>
        </div>`
    ,
    props: {
        id: Number,
        src__img: String,
        name: String,
        text: String,
        link: String,
        time: String,
        src__pic: String,
        text__comment: String,
        likes: Array
    },
    computed: {
        // Change of link colour "Chess Club"
        linkImportant() {
            if (!this.link) {
                return 'link__hidden';
            }
            if (this.link == 'Chess Club') {
                return 'link__important';
            }
        },
        // Change of background color of the box to the click
        background() {
            for (let like of this.likes) {
                if (like.id === this.id) {
                    return 'background';
                }
            }
        },
        // Adding the red dot to the click
        redDot() {
            for (let like of this.likes) {
                if (like.id === this.id) {
                    return 'red__dot';
                }
            }
        }
    }
}

const app = createApp(
    {
        data() {
            return {
                items: [
                    { id: 1, src__img: './assets/images/avatar-mark-webber.webp', name: 'Mark Webber', text: 'reacted to your recent post', link: 'My first tournament today!', time: '1m ago', src__pic: '', text__comment: '' },
                    { id: 2, src__img: './assets/images/avatar-angela-gray.webp', name: 'Angela Gray', text: 'followed you', link: '', time: '5m ago', src__pic: '', text__comment: '' },
                    { id: 3, src__img: './assets/images/avatar-jacob-thompson.webp', name: 'Jacob Thompson', text: 'has joined your group', link: 'Chess Club', time: '1 day ago', src__pic: '', text__comment: '' },
                    { id: 4, src__img: './assets/images/avatar-rizky-hasanuddin.webp', name: 'Rizky Hasanuddin', text: 'sent you a private message', link: '', time: '5 days ago', src__pic: '', text__comment: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.' },
                    { id: 5, src__img: './assets/images/avatar-kimberly-smith.webp', name: 'Kimberly Smith', text: 'commented on your picture', link: '', time: '1 week ago', src__pic: './assets/images/image-chess.webp', text__comment: '' },
                    { id: 6, src__img: './assets/images/avatar-nathan-peterson.webp', name: 'Nathan Peterson', text: 'reacted to your recent post', link: '5 end-game strategies to increase your win rate', time: '2 weeks ago', src__pic: '', text__comment: '' },
                    { id: 7, src__img: './assets/images/avatar-anna-kim.webp', name: 'Anna Kim', text: 'left the group', link: 'Chess Club', time: '2 weeks ago', src__pic: '', text__comment: '' }
                ],
                likes: [],
            }
        },
        methods: {
            // Adding the like in the array
            addLike(item) {
                if (this.likes.indexOf(item) === -1) {
                    this.likes.push(item)
                }
            },
            // Adding all the likes to the array by clicking the "Mark all as read" button
            addAllLikes() {
                for (let i = 0; i < this.items.length; i++) {
                    if (this.likes.indexOf(this.items[i]) === -1) {
                        this.likes.push(this.items[i]);
                    }
                }
            }
        },
        computed: {
            // Show the total like number
            numberLike() {
                if (this.likes !== []) {
                    return this.likes.length;
                }
            }
        }
    }
);
app.component('Profil', Profil)
app.mount('#app');