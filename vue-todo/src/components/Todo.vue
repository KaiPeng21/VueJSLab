<template>
  <div class="todo main">
    <h1>Todo List</h1>

    <b-container fluid>
        <b-table :fields="fields"
                 :items="items">
        </b-table>
    </b-container>
  </div>
</template>

<script>

const itemlist = [
    {project : 'CV Pilot', task : 'visualizing data on Google Earth', priority: '1', deadline: '08-11-2018', status : 'complete'},
    {project : 'CV Pilot', task : 'extracting data from csv', priority: '1', deadline: '08-10-2018', status : 'complete'},
    {project : 'MoT', task : 'research osm data format', priority: '4', deadline: '08-01-2018', status : 'on progress'},
    {project : 'MoT', task : 'visualize aircraft movement', priority: '3', deadline: '07-10-2018', status : 'complete'},
    {project : 'MoT', task : 'setup a backend server for lon lat conversion', priority: '5', deadline: '06-30-2018', status : 'complete'},
    {project : 'Po8', task : 'testing the robot', priority: '1', deadline: '09-06-2018', status : 'not started'},
    {project : 'Po8', task : 'create a blockchain', priority: '2', deadline: '11-11-2018', status : 'not started'},
    {project : 'TPG', task : 'testing procedure 6', priority: '1', deadline: '08-01-2018', status : 'not started'},
    {project : 'KNOW', task : 'update career goals', priority: '5', deadline: '11-10-2018', status : 'not started'},
    {project : 'CTC', task : 'create a logfile output', priority: '3', deadline: '08-07-2018', status : 'not started'},
    {project : 'Internal Site', task : 'setup backend API', priority: '5', deadline: '08-10-2018', status : 'on progress'}
]

export default {
  name: 'Todo',
  data(){
      return{
          items: itemlist,
          fields: [
              { key: 'project', label: 'Project', sortable : true, sordDirection: 'desc'},
              { key: 'task', label: 'Task', sortable : true, sordDirection: 'desc'},
              { key: 'priority', label: 'Priority', sortable : true, sordDirection: 'desc'},
              { key: 'deadline', label: 'Deadline', sortable : true, sordDirection: 'desc'},
              { key: 'status', label: 'Status'}
          ],
          currentPage : 1,
          perPage : 5,
          totalRows : itemlist.length,
          pageOptions : [5, 10, 15],
          sortBy: null,
          sortDesc: false,
          sortDirection: 'asc',
          filter: null
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
