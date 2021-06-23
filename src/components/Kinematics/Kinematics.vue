<template>
    <!-- *Important 
        this will be the template for all pages
    -->

    <!-- Kinematics -->
    <!-- landing -->
    <section class="screenview">
        <!-- fun design and test -->
        <div id="landing-bg" class="absolute w-full h-full">
        </div>

        <!-- title -->
        <h1 class="text-white font-serif text-9xl place-self-center z-10 absolute">
            Kinematics
        </h1>

        <!-- routing -->
        <section class="relative w-screen h-screen top-full grid-cols-8 gap-2" id="main-content">
            
            <div class="h-96 w-96 bg-gray-600 col-span-3">
                

            </div>

            <!-- explain -->
            <a class="w-3/5 h-2/3 bg-red-500 col-span-4">
                explaination part
            </a>
            
        </section>

    </section>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import landing from './kinematics'

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

    /* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #222;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #222;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

    #main-content {
        background: rgba(30, 58, 138);
        background: linear-gradient(0deg, rgba(30, 58, 138) 5%, rgba(34,34,34,1) 100%);
    }
</style>