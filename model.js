const model = {
  todos: [],
  filters: [
    {filter: 'All', text: 'All'},
    {filter: false, text: 'Active'},
    {filter: true,  text: 'Completed'}
  ],
  filter: 'All',
  all: true,
  slackexport: false,
  duringday: false,
  enter: 13
}

export default model