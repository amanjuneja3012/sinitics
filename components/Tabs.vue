<template lang="html">
    <div :class="['tabs', parentClass]">
        <ul>
            <li v-for="element in tabs" :id="element.id" :class="{'is-active' : value == element.id}">
                <a @click.prevent="onClick(element.id, element.target)">
                    <span class="icon is-small" v-if="element.icon"><i :class="['fa', element.icon ]"></i></span>
                    {{ element.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {

            options: {
                type: Object,
                required: false
            },

            tabs: {
                type: Array,
                required: true
            },

            value: ''

        },

        data () {
            return {

            }
        },

        computed: {
            parentClass() {
                return (this.options && this.options.parentClass) ? this.options.parentClass : '';
            }
        },

        methods: {
            onClick(id) {
                this.$emit('tab-click', id);
                this.$emit('input', id);
            }
        }
    }
</script>