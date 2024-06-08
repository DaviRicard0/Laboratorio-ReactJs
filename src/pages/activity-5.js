import { useState } from "react";
import { Accordion, Button, Container, Form } from "react-bootstrap";

export default function Activity5(){
    return (
        <Container>
            <h2>FormQuiz</h2>
            <FormQuiz/>
            <hr/>
            <h2>FormTicket</h2>
            <FormTicket/>
            <hr/>
            <h2>Accordion</h2>
            <AccordionCustom/>
            <hr/>
            <h2>ContactList and Chat</h2>
            <Mensseger/>
        </Container>
    )
}

function FormQuiz(){
    const [name,setName] = useState("");

    return (
        <Form>
            <h4>City quiz</h4>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>What is your name?</Form.Label>
                <Form.Control as={'textarea'} type="textarea" value={name} onChange={x => setName(x.target.value)} placeholder="Name" />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={name !== "" ? "" : "disabled"}>
                Submit
            </Button>
        </Form>
    )
}

function FormTicket(){
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");

    return (
        <Form>
            <h4>Let's check you in</h4>
            <Form.Group className="mb-3" controlId="formBasicFirst">
                <Form.Label>First name?</Form.Label>
                <Form.Control type="text" value={firstName} onChange={x => setFirstName(x.target.value)} placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLast">
                <Form.Label>Last name?</Form.Label>
                <Form.Control type="text" value={lastName} onChange={x => setLastName(x.target.value)} placeholder="Name" />
            </Form.Group>
            <h5>Your ticket will be issued to: {firstName} {lastName}</h5>
        </Form>
    )
}

function AccordionCustom(){
    return (
        <Container>
            <h4>Teste</h4>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </Container>
    )
}

function Mensseger(){
    const [to,setTo] = useState(contacts[0]);

    return (
        <Container>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat contact={to}/>
        </Container>
    )
}

function ContactList({selectedContact,contacts,onSelect}){
    return (
        <section className="contact-list">
            <ul>
                {contacts.map(contact => 
                    <li key={contact.email}>
                        <button onClick={()=>onSelect(contact)}>
                            {contact.name}
                        </button>
                    </li>
                )}
            </ul>
        </section>
    )
}

function Chat({contact}){
    const [text,setText] = useState('');

    return (
        <section className="chat">
            <textarea value={text} onChange={e => setText(e.target.value)}/>
            <br></br>
            <button>Send to {contact.email}</button>
        </section>
    )
}

const contacts = [
    {name:'Taylor',email:'taylor@mail.com'},
    {name:'Alice',email:'alice@mail.com'},
    {name:'Bob',email:'bob@mail.com'}
];