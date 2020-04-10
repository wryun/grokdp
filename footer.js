import model   from './model'
import actions from './actions'

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
        model.todos.find(x => x.completed) &&
        m('button.clear-completed', {
          onclick: actions.clear
        }, 'Clear completed')
      )
  }
}

export default footer