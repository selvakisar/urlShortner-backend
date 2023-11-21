import { useState } from "react";

import { Button, Card, Container, Form } from "react-bootstrap";
import { handleForget } from "../services/Auth";

function Forget() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const ForgetUser = async () => {
    const payload = { email };

    handleForget(payload).then((data) => {
      if (data.error) {
        setError(data.error);
        setSuccessMsg("");
      } else {
        setError("");
        setSuccessMsg(data.message);
        localStorage.setItem("token", data.token);
      }
    });
  };

  return (
    <div>
      <ForgetForm email={email} setEmail={setEmail} ForgetUser={ForgetUser} />

      <div>
        <div>
          {error ? (
            <div>
              <div className="badge badge-error gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                {error}
              </div>
            </div>
          ) : (
            ""
          )}

          {successMsg ? (
            <div className="badge badge-success gap-2 display:inherit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              {error}
              {successMsg}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

function ForgetForm({ email, setEmail, ForgetUser }) {
  return (
    <Container>
    <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src="https://logopond.com/logos/f4174059310a70e582455b0cd0175e18.png" />
  <Card.Body>
    <Card.Title>Forget Password</Card.Title>
    <Card.Text>
    Enter your Email to recover your account
    </Card.Text>
  </Card.Body>
    <Form.Group>
        <Form.Label>Email</Form.Label>
            <Form.Control
            type = "email"  placeholder="@mail.com "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
    </Form.Group>
    
    <Button  onClick={()=>ForgetUser()}>send mail</Button>
  <Card.Body>
    <Card.Link href=" /" >Login </Card.Link>
  </Card.Body>
</Card>
</Container>
  );
}

export default Forget;