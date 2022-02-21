<template>
    <Header/>
    <div>
        <CreatePost/>
        <Posts/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import CreatePost from '@/components/CreatePost';
import Posts from '@/components/Posts';


export default {
    components: {
        Header,
        CreatePost,
        Posts,
    }
}
</script>

<style>

</style>