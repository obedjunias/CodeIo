import React from 'react';
import './Signup.css';
import Axios from 'axios';
export default class Comments extends React.Component{
  constructor(props) {
		super(props)

		this.state = {
			id: '5',
      name: 'Obed',
      email: 'obed@gmail.com',
			body: 'Test'
		}
}
changeHandler  = e =>{
  this.setState({ [e.target.name]: e.target.value },console.log(this.state))
}
submitHandler = e => {
  e.preventDefault()

  Axios.post('https://i9ytwm3hb7.execute-api.ap-south-1.amazonaws.com/test/signup/posts/comments', this.state).then(response => {
      console.log(response);
      alert('Your Comment Was Posted...')
    }).catch(error => {
      console.log(error)
    })
}
render(){
  const { id, name,email, body } = this.state
  return(
        <body>
        <form  onSubmit={this.submitHandler}>  
        <h1>Comment Time...!!</h1>
              <fieldset>
                <label htmlFor="id">UserId:</label>
                <input type="text" id="uid" name="id" value={id} onChange={this.changeHandler.bind(this)} />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={email} onChange={this.changeHandler.bind(this)} />
                <label htmlFor="title">Comment Name:</label>
                <input type="text" id="title" name="name" value={name} onChange={this.changeHandler.bind(this)} />
                <label htmlFor="body">Comment:</label>
                <textarea rows="4" cols="50" name= "body" value={body} onChange={this.changeHandler.bind(this)}></textarea>
              </fieldset>
              <button type="submit" >Comment</button>
        </form></body>
    )
}
}