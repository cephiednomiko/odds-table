<template>
    <div id="app">
        <oddsTable/>
    </div>
</template>

<script>
    import oddsTable from './components/odds-table.vue'
    import store from './store'


    export default {
        name: 'App',
        components: {
            oddsTable
        },
        mounted() {
            const width = () => {
                store.commit('clearRowScroll');
                const rowWidth = document.querySelector('.row__third-column').offsetWidth
                const scrollWidth = document.querySelector('.row__third-column .row__scroll').offsetWidth
                store.commit('setRowWidth', scrollWidth - rowWidth)

            };
            setTimeout(() => {
                width()
            }, 300);
            window.addEventListener('resize', width)


        }

    }
</script>
