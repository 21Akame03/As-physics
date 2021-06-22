<template>
    <!-- Kinematics -->
    <!-- landing -->
    <section class="screenview relative">

        <!-- fun design and test -->
        <div id="landing-bg" class="absolute w-full h-full">
        </div>

        <!-- title -->
        <h1 class="text-white font-serif text-9xl place-self-center z-10">
            Kinematics
        </h1>

    </section>

    <!-- speed and acceleration -->
    <section class="screenview bg-blue-900 relative">
        hello
        <main class="w-20 h-20 bg-indigo-50">
            hello
        </main>
        
    </section>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import Matter from 'matter-js'
import landing from './physics'

export default {
    setup() {

        // run the engines
        onMounted(() => {
            landing();
        });
        
    },
}
</script>

<style scoped>

</style>