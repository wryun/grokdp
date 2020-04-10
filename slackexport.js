import model from './model.js'

function getState(todoItem) {
  if (todoItem.completed) {
    return '✔';
  }
  if (todoItem.indeterminate) {
    return '➖';
  }

  if (model.duringday) {
    return '❌';
  }

  return '🔲';
}

const slackexport = () => {
  return {
    view: () =>
      m('textarea.slackexport',
        model.todos
        .filter(x => model.filter === 'All' ? x : x.completed === model.filter)
        .map(x => `${getState(x)} ${x.additional ? '➕ ' : ''}${x.title}`)
        .join('\n')
      )
  }
}

export default slackexport