<template>
    <!-- *Important 
        this will be the template for all pages
    -->
    
    <!-- Kinematics -->
    <!-- landing -->
    <div class="screenview relative">
        <!-- fun design and test -->
        <div id="landing-bg" class="absolute w-screen h-screen">
        </div>

        <!-- title -->
        <h1 class="text-white font-serif text-9xl place-self-center z-10 absolute">
            Kinematics
        </h1>


        <!-- routing -->
        <section class="relative h-screen top-full main-content text-white">
            
            <!-- This is a canvas for drawings or matterjs or other things -->
            <div class="relative temp-columns" id="speed">

            </div>

            <!-- explain -->
            <div class="temp-columns px-3" id="speedaccel" >

                <h2 class="text-2xl">
                    Speed, Velocity and Accelration
                </h2>
                
                <p> 
                    Snippet management is a text editor feature popular among software developers or others who routinely require content from a catalogue of repeatedly entered text (such as with source code or boilerplate). Often this feature is justified because the content varies only slightly (or not at all) each time it is entered.

Snippets in text editors
Text editors that include this feature ordinarily provide a mechanism to manage the catalogue, and separate "snippets" in the same manner that the text editor and operating system allow management of separate files. These basic management abilities include operations such as viewing, adding, editing, deleting, sorting, filtering, grouping, renaming, and storing snippets in a repository, catalogue, or database. Some editors provide a macro ability to snippets allowing function prototypes and variable control structures to be generated based on a standard template.

Snippets in IDEs
Some programmer's applications such as Eclipse, NetBeans, and Microsoft's Visual Studio and other IDEs include built-in parts of structure for ease of coding.

Other applications such as Macromedia Dreamweaver make use of these code snippets as well for Web development.

Snippets in JIT compilers
Just-in-time (JIT) compilers can "splice together" pre-compiled sections of code as longer object code/machine code segments. This reduces interpret time significantly and simultaneously speeds execution.
                </p>

                <p>
                    adjsklllllllllllllllllllllllllllllllllllllll
                    sadsssssssssssssssssssssssssssssssssf
                    af
                    fsdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddd
                </p>
            </div>
            
        </section>
    </div>

    


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
/* /* width
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
} */

/* Track */
/* ::-webkit-scrollbar-track {
  background: #222;
} */

/* Handle
/* ::-webkit-scrollbar-thumb {
  background: #222;
} */ 

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #555;
} */

.main-content {
    background: rgba(30, 58, 138);
    background: linear-gradient(0deg, rgba(30, 58, 138) 30%, rgba(34,34,34,1) 70%);
    display: grid;
    width: calc(100%);

    grid-template-columns: 50% 50%;
}

.temp-columns {
    padding-top: 10%;
}

#speedaccel {
    display: grid;
    grid-template-rows: 10% 30% 30% 30%;
}

</style>