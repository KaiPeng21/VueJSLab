<template>
  <div class="header">
      <b-navbar toggleable="md" type="dark" variant="info">

          <!-- Collapsible/ Responsive Button (Only displays at smaller screens) -->
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <!-- Company Brand -->
          <b-navbar-brand href="#">CompanyName</b-navbar-brand>

          <!-- Collapsible/ Responsive Navbar (to screen size) -->
          <b-collapse is-nav id="nav_collapse">
              
              <!-- Main Links -->
              <b-navbar-nav>
                  <b-nav-item> <router-link to="/">Home</router-link> </b-nav-item>
                  <b-nav-item> <router-link to="/todo">TodoList</router-link> </b-nav-item>
              </b-navbar-nav>

              <!-- Right Aligned Objects -->
              <b-navbar-nav class="ml-auto">

                  <!-- Dropdown -->
                  <b-nav-item-dropdown text="Dashboard" right>
                      <b-dropdown-item>Staff Based</b-dropdown-item>
                      <b-dropdown-item>Task Based</b-dropdown-item>
                  </b-nav-item-dropdown>
                  <b-navbar-nav>
                      <b-nav-item> Tasks </b-nav-item>
                      <b-nav-item> Console </b-nav-item>
                  </b-navbar-nav>
                  <b-button variant="success" class="my-2 my-sm-0">View Profile</b-button>
              </b-navbar-nav>

          </b-collapse>


      </b-navbar>

  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    background-color: black;
}

</style>
