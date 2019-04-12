import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      display: []
    }
  }


  handleInput = (e) => {
    this.setState({ input: e.target.value })
  }

  clickerClicked = (e) => {
    // console.log('clicked',e)
    const { input, display } = this.state;
    e.preventDefault();
    let copy = [...this.state.display]
    copy.push(this.state.input)
    this.setState({ display: copy })
  }



  render() {
    const { input, display } = this.state
    return ( <>
      
      <div> 

        {
          display.map((e,i)=>{

            return(<>

          <p>    <input type='text' value={this.state.input} onChange={this.handleInput} />
          <button onClick={this.clickerClicked}>Submit</button></p>

        {/* DISPLAY THE INFO HERE  */}
        {/* ViewComments*/}
        <div class="input-group">

          <p> <div class="form-control">{display[0]}</div> </p>

        </div>
            </>)
          })



        } 
     
        </div>
      </>
    )
  }

}

export default Input