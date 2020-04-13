import model   from './model.js'
import actions from './actions.js'

const header = () => {
  let todon = {}
  
  const add = () => {
    todon.id = Date.now()
    todon.title.trim()
    todon.additional = model.duringday
    todon.indeterminate = model.duringday
    todon.completed = false
    actions.push(todon)
    todon = {}
  }
  
  return {
    view: () => 
      m('header.header',
        m('h1', '#daily-priorities'),
        m('input.new-todo', {
          autofocus: true,
          placeholder: 'What needs to be done?',
          oninput: e => todon.title = e.target.value,
          onkeydown: e => {if (e.keyCode === model.enter && e.target.value.trim()) add()},
          value: todon.title
        })
      )
  }
}

export default header