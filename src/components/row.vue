<template>
    <div class="row">
        <div class="row__first-column">
            <div class="row__header">
                <span class="row__date row__date--font-small"><span class="mobile-hidden">THU OCT 01 </span>8:20 PM</span>
            </div>
            <div v-if="(type === 'spread') || (type === 'moneyline')"
                 class="row__teams row__teams--font-large">
                <span v-for="team in odds.teams"
                      :key="`team-${team.id}`"
                      class="mobile-hidden"
                      v-text="team.name"/>
                <abbr v-for="team in odds.teams"
                      :key="`team-mob-${team.id}`"
                      class="desktop-hidden"
                      :title="team.name"
                      v-text="team.shortName"/>
            </div>
            <div v-else
                 class="row__teams">
                <abbr title="Over">Ov<span class="mobile-hidden">e</span>r</abbr>
                <abbr title="Under">Und<span class="mobile-hidden">er</span></abbr>
            </div>
        </div>
        <div class="row__second-column">
            <div class="row__header">
                CONSENSUS
            </div>
            <div class="row__consensus">
        <span v-for="(cons,ind) in consensus"
              :key="`cons-${ind}`"
              v-text="cons"/>
            </div>
        </div>
        <div class="row__third-column">
            <div ref="row"
                 class="row__scroll"
                 :style="`left:${rowScroll}px`"
                 @wheel.prevent="scrollMouse"
                 @mouseenter="stopBodyScroll('add')"
                 @mouseleave="stopBodyScroll('remove')">
                <bookmaker v-for="(maker, index) in odds.bookmakers"
                           :key="index"
                           :maker="maker"
                           :type="type"/>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex'
    import bookmaker from './bookmaker.vue'
    import store from '../store'

    export default {
        components: {
            bookmaker
        },
        props: {
            type: {type: String, required: true}
        },
        computed: {
            ...mapState(['odds', 'rowScroll']),

            consensus() {
                return store.getters.cons(this.type)
            }
        },
        methods:{
            scrollMouse(e){
                e.deltaY > 0 ? store.commit('scroll', 'left') : store.commit('scroll', 'right')
            },
            disableDefault(e){
                e.preventDefault();
            },
            stopBodyScroll(method){
                document[method + 'EventListener']("MozMousePixelScroll", this.disableDefault );
            }
        }


    }
</script>
