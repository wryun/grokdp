import model   from './model.js'

const toggles = () => {
  return {
    view: () =>
      m('div.toggles',
        m('div',
          m('input', {
            name: 'slackexport',
            type: 'checkbox',
            checked: model.slackexport,
            onchange: () => { model.slackexport = !model.slackexport }
          }),
          m('label', {
            for: 'slackexport',
          }, 'Slack export')
        )
      )
  }
}

export default toggles