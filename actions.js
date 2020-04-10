import model from './model'

const actions = {
  init: () => {model.todos = JSON.parse(localStorage.getItem('todos-mithril')) || []},
  clone: x => JSON.parse(JSON.stringify(x)),
  save: () => localStorage.setItem('todos-mithril', JSON.stringify(model.todos)),
  push:  t => {
    model.todos.push(actions.clone(t))
    actions.save()
  },
  done: x => {
    if (x === 'all') {
      model.todos.forEach(x => x.completed = model.all)
      model.all = !model.all
    }
    else model.todos[x].completed = !model.todos[x].completed
    actions.save()
  },
  clear: () => {
    model.todos = model.todos.filter(x => !x.completed)
    model.all = true
    actions.save()
  },
  splice: i => {
    model.todos.splice(i,1)
    actions.save()
  },
  blur: (i, todo) => {
    model.todos[i] = actions.clone(todo)
    actions.save()
  },
  setfil: fil => model.filter = fil
}

export default actions