import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function randomizer(startVal, valRange, decimal) {
    return (Math.random() * valRange + startVal).toFixed(decimal ? decimal : 0);
}

export default new Vuex.Store({
    state() {
        return {
            odds: {
                teams: [
                    {
                        id: 0,
                        name: 'Denver Broncos',
                        shortName: 'Den'
                    },
                    {
                        id: 1,
                        name: 'New York Jest',
                        shortName: 'NYJ'
                    }
                ],
                bookmakers:
                    ["DraftkingSportsbook", "FanduelSportsbook", "PointsBet", "Betrivers", "SugarHouse", "DraftkingSportsbook", "FanduelSportsbook",].map(name => {
                        return { // returns randomized data for bookmakers
                            name: name,
                            results: {
                                spread: {
                                    0: [randomizer(0, 4)/2, randomizer(1, 1, 2)],
                                    1: [randomizer(0, -4)/2, randomizer(1, 1, 2)]
                                },
                                totals: {
                                    0: [randomizer(80, 4)/2, randomizer(1, 1, 2)],
                                    1: [randomizer(80, 4)/2, randomizer(1, 1, 2)]
                                },
                                moneyline: {
                                    0: [randomizer(1.5, 1, 2)],
                                    1: [randomizer(1.5, 1, 2)]
                                }
                            }
                        }
                    }),
            },
            rowScroll: 0,
            rowWidth: 0,
            timeout: null
        }
    },
    getters: {
        cons: (state) => (type) => {
            let res = [];
            for (let i = 0; i < 2; i += 1) {
                let arr = state.odds.bookmakers.map(v => v.results[type][i][0]);
                res.push(arr.sort((a, b) =>
                    arr.filter(v => v === a).length
                    - arr.filter(v => v === b).length
                ).pop());

            }
            return res;
        },
        bestTop: (state) => (type) => {
            const arr = state.odds.bookmakers.map(v => v.results[type][0][0]);
            return Math.max(...arr);
        },
        bestBottom: (state) => (type) => {
            const arr = state.odds.bookmakers.map(v => v.results[type][1][0]);
            return Math.max(...arr);
        }
    },
    mutations: {
        setRowWidth(state, payload) {
            state.rowWidth = payload
        },
        clearRowScroll(state) {
            state.rowScroll = 0
        },
        scroll(state, payload) {
            payload === 'right' ? state.rowScroll -= 112 : state.rowScroll += 112;
            state.rowScroll > 0 ? state.rowScroll = 0 : state.rowScroll;
            state.rowScroll < 0 - state.rowWidth ? state.rowScroll = 0 - state.rowWidth : state.rowScroll
        },

    }
})
