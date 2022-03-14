const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: 1, title: "Primeira Aula" },
          { id: 2, title: "Segunda Aula" },
        ],
      },
      {
        id: 2,
        title: "Seila com React",
        lessons: [
          { id: 3, title: "Terceira Aula" },
          { id: 4, title: "Quarta Aula" },
        ],
      },
    ]
  };
  const course = (state = INITIAL_STATE, action) =>{
    if(action.type === 'TOGGLE_LESSON'){
      return {...state, activeLesson: action.lesson, activeModule: action.module}
    }
    return state
  }

  export default course