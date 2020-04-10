import model   from './model'
import actions from './actions'
import header  from './header'
import main    from './main'
import footer  from './footer'

const app = {
  oninit: () => actions.init(),
  view: () => [
    m(header), 
    model.todos.length > 0 && m(main),
    model.todos.length > 0 && m(footer)
  ]
}

m.route(document.querySelector('.todoapp'), '/All', {'/:filter': app})