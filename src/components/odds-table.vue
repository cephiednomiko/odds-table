<template>
    <div class="container">
        <header>
            <h1>Odds table markup</h1>
            <nav class="options">
                <select aria-label="Odds variant">
                    <option>Decimal odds</option>
                    <option selected>American odds</option>
                </select>
                <arrows/>
            </nav>
        </header>
        <main>
            <section>
                <h2>Spread odds</h2>
                <row type="spread"></row>
            </section>
            <section>
                <h2>Totals odds</h2>
                <row type="totals"></row>
            </section>
            <section>
                <h2>Moneyline odds</h2>
                <row type="moneyline"></row>
            </section>
        </main>
    </div>
</template>

<script>

    import row from './row.vue'
    import arrows from './arrows.vue'

    export default {
        name: 'OddsTable',
        components: {
            row,
            arrows
        }

    }
</script>
