import React from 'react'
import 'styles/homeStyle.less'

export default class home extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentWillMount(){
  }

  render(){
    return(
      <div className='home'>
        <ul className='title'>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>Setting</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
        </ul>
      </div>
    )
  }
}