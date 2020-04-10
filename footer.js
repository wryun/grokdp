import model   from './model.js'
import actions from './actions.js'

const footer = () => {
  const left = () => model.todos.filter(x => !x.completed).length
  
  return {
    view: () =>
      m('footer.footer',
        m('span.todo-count',
          m('strong', left()), ` item${left() === 1 ? '' : 's'} left`
        ),
        m('ul.filters', 
          model.filters.map(x => 
            m('li',
              m('a', {
                class: model.filter === x.filter && 'selected',
                onclick: () => {actions.setfil(x.filter); m.route.set('/' + x.text)}
              }, x.text)
            )
          )
        ),
        m('button.day', {
          onclick: actions.changeday,
        }, model.duringday ? 'Prepare for next day' : 'Start working')
      )
  }
}

export default footer