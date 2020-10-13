<template>
    <div class="bookmaker">
        <div class="row__header">
            <span :class="`bookmaker__img bookmaker__img--${maker.name}`"/>
        </div>
        <div class="bookmaker__result"
             :class="{'bookmaker__result--best-top': Number(maker.results[type][0][0]) === bestTop, 'bookmaker__result--best-bottom': Number(maker.results[type][1][0]) === bestBottom }">
            <span v-for="(res, index) in maker.results[type]"
                  :key="`res-${index}`">
                <span v-for="(r, i) in res"
                      :key="`r-${i}`"
                      class="bookmaker__result-value"
                      v-text="r"/>
            </span>
        </div>
    </div>
</template>

<script>
    import store from '../store'

    export default {
        props: {
            maker: {type: Object, required: true},
            type: {type: String, required: true}

        },
        computed: {
            bestTop() {
                return store.getters.bestTop(this.type)
            },
            bestBottom() {
                return store.getters.bestBottom(this.type)
            }

        }

    }
</script>
