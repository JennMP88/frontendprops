import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      display: []
    }
  }



  componentWillMount() {
    localStorage.getItem('display') && this.setState({
        display: JSON.parse(localStorage.getItem('display')),
        input: ''
    })
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

          <p> <input type='text' value={this.state.input} onChange={this.handleInput} />
          
          <button onClick={this.clickerClicked}>Submit</button></p>

       
        <div class="input-group">

          <p> <div class="form-control w-100 p-3">{display}</div> </p>

        </div>
        {
          display.map((e,i)=>{

            return(<>
            <p>  {e.display}   </p>   
              
            </>)
          })
        }  
        </div>
      </>
    )
  }

}

export default Input