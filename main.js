import model   from './model'
import actions from './actions'

const main = () => {
  const escape = 27
  let todo = {}
  
  return {
    view: () =>
      m('section.main',
        m('input.toggle-all', {
          id: 'toggle-all',
          type: 'checkbox',
          checked: model.todos.every(x => x.completed)
        }),
        m('label', {
          for: 'toggle-all',
          onclick: () => actions.done('all')
        }, 'Mark all as complete'),
        model.todos
        .filter(x => model.filter === 'All' ? x : x.completed === model.filter)
        .map((x,i) =>
          m('ul.todo-list',
            m('li', {
                class: `${x.completed ? 'completed' : 'active'} ${x.id === todo.id && 'editing'}`,
              },
              m('.view',
                m('input.toggle', {
                  type: 'checkbox',
                  checked: x.completed,
                  onchange: () => actions.done(i)
                }),
                m('label', {ondblclick: () => todo = actions.clone(x)}, x.title),
                m('button.destroy', {onclick: () => actions.splice(i)})
              ),
              m('input.edit', {
                onupdate: ({dom}) => dom.focus(),
                oninput: e => todo.title = e.target.value,
                onblur: e => {
                  if (Object.keys(todo).length) {
                    if (!todo.title.trim()) {
                      actions.splice(i)
                      todo = {}
                    }
                    else {
                      actions.blur(i, todo)
                      todo = {}
                    }
                  }
                },
                onkeydown: e => {
                  if (e.keyCode === model.enter) e.target.blur()
                  else if (e.keyCode === escape) todo = {}
                },
                value: todo.title
              })
            )
          )
        )
      )
  }
}

export default main