import model   from './model.js'
import actions from './actions.js'
import header  from './header.js'
import main    from './main.js'
import footer  from './footer.js'
import toggles from './toggles.js'
import slackexport  from './slackexport.js'

const app = {
  oninit: () => actions.init(),
  view: () => [
    model.todos.length > 0 && m(toggles),
    m(header), 
    model.todos.length > 0 && !model.slackexport && m(main),
    model.todos.length > 0 && model.slackexport && m(slackexport),
    model.todos.length > 0 && m(footer),
  ]
}

m.route(document.querySelector('.todoapp'), '/All', {'/:filter': app})