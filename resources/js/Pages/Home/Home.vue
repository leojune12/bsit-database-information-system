<template>
    <div class="tw-min-h-screen">
        <Header />
        <Hero />
    </div>
    <About />
    <Services />
    <Faq />
    <Contact />
    <Comment />
    <Footer />
</template>

<script setup>
    import { ref } from 'vue'
    import Header from '@/Pages/Home/Components/Header.vue'
    import Hero from '@/Pages/Home/Components/Hero.vue'
    import About from '@/Pages/Home/Components/About.vue'
    import Services from '@/Pages/Home/Components/Services.vue'
    import Faq from '@/Pages/Home/Components/Faq.vue'
    import Contact from '@/Pages/Home/Components/Contact.vue'
    import Comment from '@/Pages/Home/Components/Comment.vue'
    import Footer from '@/Pages/Home/Components/Footer.vue'
</script>
