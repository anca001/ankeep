<script setup>
import axios from "axios"

  const header = ref('Recipe app')
  let res = await axios.get('http://localhost:5656/recipes/')

  const newItem = ref("")

  const submitForm = async () => {
  const response = await axios.post('http://localhost:5656/recipe/', {
    title: newItem.value,
  })
}

  // axios.post('http://localhost:5656/recipe', {
  //   title: 'Test',
  //   link: 'Test link'
  // }).then(function(response) {
  //   console.log(response)
  // }).catch(function(error){
  //   console.log(error)
  // })

</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- for each link ... pass title and link as props to ItemCard -->
     <ul v-for="item in res.data">
      <ItemCard :title="item.title" :link="item.link"/>
     </ul>
  </div>
  <div>
    <h1> {{  header }}</h1>
    <form @submit.prevent="onSubmit">
    <input v-model="newItem" type="text" placeholder="Add an item">
    {{ newItem }}
    <button v-on:click="submitForm" type="submit" class="btn btn-success">Submit</button>
    </form>
    <!-- <input v-model="recipe" placeholder="enter recipe">
    <input v-model="link" placeholder="enter link">
    <button @click="submit">Submit</button> -->
  </div>
  <!-- <div>{{ res.data }}</div> -->
</template>
