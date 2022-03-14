import React from 'react'
import { connect } from 'react-redux'
const Video = ({activeModule, activeLesson}) => {
  return (
    <>
    <strong>Modulo {activeModule.title}</strong>
    <span>Aula {activeLesson.title}</span>
    </>
  )
}

export default connect(state => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
}))(Video)