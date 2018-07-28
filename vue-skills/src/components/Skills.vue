<template>
  <div>
  <h1 class="header">My Skills</h1>
  <div class="holder container">
    <form @submit.prevent="addSkill">
      <input type='text' placeholder='Enter new skill' class="textfield" v-model="newSkill" v-validate='"min:4"' name='skill'/>

      <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">  
        <p class="alert" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
      </transition>
    </form>
    <ul>
      <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <li v-for="(val, index) in skills" :key="index">{{ val.skill }} <button class="delete-btn" v-on:click="removeSkill(index)">x</button></li>
      </transition-group>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data(){
    return {
      newSkill : '',
      skills : [
        {'skill' : 'Vue.js'},
        {'skill' : 'React'},
        {'skill' : 'Python'},
        {'skill' : 'AWS'}
      ]
    }
  },
  methods:{
    addSkill(){
      this.$validator.validateAll().then((result) => {
        if (result){
          this.skills.push({'skill' : this.newSkill})
          this.newSkill = ''
        }
      })
    },
    removeSkill(index){
      this.skills.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.2';
  
  .holder {
    background: #fff;
  }

  .textfield{
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .alert{
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  .delete-btn{
    background: lightblue;
    float: right;
    border: 1px solid lightblue;
    border-radius: 5px;
  }


</style>
