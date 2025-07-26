import { React, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';


function App() {
  
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const getFormValues = () => {
    setIsSubmit(true);
    /*if(name.length > 0 && email.length > 0) {
      document.getElementById('test').innerHTML = "We got value: "+name+" and email: "+email;
    }*/
  }

  return (
    <>
      <div>
        <h1>Welcome to form submission</h1>

      </div>  
      <Container>
        <Row>
          <Col className="col-md-12">


            <h4 id='test'></h4>
            {/*name.length > 0  } We received value: {name} - {email*/}

{/** I search online to find how to place condition within div to see if the submittion value is true then only display name and email */}

            {isSubmit && (
              <p>here {name} - {email}</p>
            )}
            


            <Form>
              <label>Name:</label>
              <input type="text" placeholder='Enter your name' id='name' name='name' onChange={(e)=>setName(e.target.value)} />

              <label>Email:</label>
              <input type="email" placeholder='Enter your email' id='email' name='email' onChange={(e)=>setEmail(e.target.value)} />
              <button type="button" className="bg-primary" style={{color: 'white'}} onClick={getFormValues}>Submit</button>
            </Form>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default App
