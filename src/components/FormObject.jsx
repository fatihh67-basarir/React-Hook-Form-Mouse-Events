import { useState } from "react"


const FormObject = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState ("")

  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`username:${username}
    email:${email}
    password:${password}
    `);

    
  }

  
    return (
    <div >
        <form onSubmit={handleSubmit}>
  <div className="mb-3 ">
    <label htmlFor="username" className="form-label">Username <span>{username}</span></label>
    <input type="text" className="form-control" id="username" value={username} onChange={handleUsername}/>
  </div>       

  <div className="mb-3 ">
    <label htmlFor="email" className="form-label">Email address <span>{email}</span></label>
    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <button  type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default FormObject