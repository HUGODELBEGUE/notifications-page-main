const { createApp } = Vue;

const Notif = {
    template: `<span>{{ number }}</span>`,
    name: 'Notif',
    data() {
        return {
            number: null
        }
    },
    props: {
        name: String,
        likes: Number
    },
    methods: {
        // Like counter
    }
}
const Profil = {
    template:
        `<div class="profil__container">
            <div class="profil__img">
                <img :src="src" alt="photo profil" />
            </div>
            <div class="profil__box">
                <div class="profil__description">
                    <div class="profil__text">
                        <p><strong>{{ name }}</strong>{{ text }}<a>{{ link }}</a></p>
                    </div>
                    <span>{{ time }}</span>
                </div>
                <div class="profil__comment">
                    <p>{{ text_comment }}</p>
                </div>
            </div>
        </div>`
    ,
    name: 'Profil',
    props: {
        src: String,
        name: String,
        text: String,
        link: String,
        time: String,
        text_comment: String

    }

}

const app = createApp({
    data() {
        return {
            message: 'hello man!'
        }
    }
});
app
    .component('Notif', Notif)
    .component('Profil', Profil)
app.mount('#app');