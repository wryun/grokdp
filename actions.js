import model from './model.js'

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
    } else {
      const todo = model.todos[x];
      if (todo.completed) {
        todo.completed = false;
      } else if (todo.indeterminate) {
        todo.indeterminate = false;
        todo.completed = true;
      } else {
        todo.indeterminate = true;
      }
    }
    actions.save()
  },
  changeday: () => {
    model.duringday = !model.duringday;

    if (!model.duringday) {
      // The day must have just finished.
      model.todos = model.todos
        .filter(x => !x.completed)
        .map(x => {
          x.indeterminate = x.additional = false;
          return x;
        })
      model.all = true
      actions.save()
    }
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