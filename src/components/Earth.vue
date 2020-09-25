<template>
    <div id="FreedoEarth"></div>
</template>

<script>
/* Gis相关 */
import Earth from "@/assets/js/Earth";
export default {
    name: "earth",
    data() {
        return {

        };
    },

    methods: {

    },
    mounted() {
		window.earth = new Earth('FreedoEarth');
    }
};
</script>

<style lang="scss">
#FreedoEarth {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
</style>
