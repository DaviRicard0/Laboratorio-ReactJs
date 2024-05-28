import { useEffect, useState } from 'react';
import { Container,Button,ButtonGroup,Card,Form, Image,ListGroup,ListGroupItem } from 'react-bootstrap';

export default function Activity4(){
    return (
        <Container>
            <h2>Toolbar</h2>
            <ButtonGroup aria-label="Basic example">
                <Button variant="primary" onClick={() => alert('One!')}>Click One</Button>
                <Button variant="primary" onClick={() => alert('Two!')}>Click Two</Button>
                <Button variant="primary" onClick={() => alert('Three!')}>Click Three</Button>
            </ButtonGroup>
            <hr/>
            <h2>Gallery</h2>
            <Gallery/>
            <hr/>
            <h2>Counter</h2>
            <Counter/>
            <hr/>
            <h2>Form</h2>
            <FormCustom/>
            <hr/>
            <h2>MovingDog</h2>
            <MovingDog/>
            <hr/>
            <h2>Form 2</h2>
            <FormCustom2/>
            <hr/>
            <h2>Form 3</h2>
            <FormCustom3/>
            <hr/>
            <h2>List</h2>
            <List/>
            <hr/>
            <h2>List 2</h2>
            <List2/>
            <hr/>
            <h2>Shape Editor</h2>
            <ShapeEditor/>
            <hr/>
            <h2>Counter List</h2>
            <CounterList/>
            <hr/>
            <h2>Bucket List</h2>
            <BucketList/>
            <hr/>
        </Container>
    );
}

function Gallery() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/20342406/pexels-photo-20342406/free-photo-of-frio-com-frio-arvores-jardim-zoologico.jpeg" />
      <Card.Body>
        <Card.Title>Camelo {'('}1/12{')'}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => alert('Details')}>Show Details</Button>
      </Card.Body>
    </Card>
  );
}

function Counter(){
    const [count,setCount] = useState(0);

    return (
        <Container style={{flexDirection:'row',display:'flex'}}>
            <h3>{count}</h3>
            <Button style={{marginLeft:20}} onClick={() => setCount(prev => prev + 3)}>+3</Button>
        </Container>
    );
}

function FormCustom(){
    return (
        <Container style={{border:'1px solid black', padding:20}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control as={'textarea'} type="textarea" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

function MovingDog(){
    const [x,setx] = useState(10);

    useEffect(()=>{
        if (x === 500)
            setx(0);
        setTimeout(()=>{
            setx(prev => prev + 10)
        },100)
    },[x]);

    return (
        <Container style={{border:'1px solid gray',backgroundColor:'lightgray',position:"relative",padding:0,height:200}}>
            <Container style={{backgroundColor:"red",height:20,width:20,padding:0,borderRadius:40,top:50,position:'absolute',left:x}}/>
        </Container>
    )
}

function FormCustom2(){
    const [form,setForm] = useState({
        firstName: "",
        lastName:"",
        email:""
    });

    return (
        <Container style={{border:'1px solid black', padding:20}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="email" placeholder="Enter name" onChange={e => setForm({...form,firstName:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter last name" onChange={e => setForm({...form,lastName:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter email" onChange={e => setForm({...form,email:e.target.value})}/>
                </Form.Group>
                <h3>{form.firstName} {form.lastName} {'('}{form.email}{')'}</h3>
            </Form>
        </Container>
    )
}

function FormCustom3(){
    const [form,setForm] = useState({
        name: "Floresta",
        title:"Verde",
        city:"Paris",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Some_trees.jpg/303px-Some_trees.jpg"
    });

    return (
        <Container style={{border:'1px solid black', padding:20}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter name" onChange={e => setForm({...form,name:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Enter title" onChange={e => setForm({...form,title:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="Enter city" onChange={e => setForm({...form,city:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control placeholder="Enter image" onChange={e => setForm({...form,image:e.target.value})}/>
                </Form.Group>
                <h3>{form.name} {form.title} {'('}{form.city}{')'}</h3>
                <Image src={form.image} width={300} height={300}/>
            </Form>
        </Container>
    )
}

function List(){
    const [input,setInput] = useState("");
    const [list,setList] = useState([]);

    const handleAddList = () => {
        setList([...list,input])
    }

    return (
        <Container style={{border:'1px solid black', padding:20}}>
            <h3>Inspiring sculptors</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control placeholder="Enter name" onChange={e => setInput(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleAddList}>
                    Add
                </Button>
            </Form>
            <hr/>
            <ListGroup>
                {
                    list.map(item => 
                        <ListGroup.Item>{item}</ListGroup.Item>
                    )
                }
            </ListGroup>
        </Container>
    )
}

function List2(){
    const [input,setInput] = useState("");
    const [list,setList] = useState([]);

    const handleAddList = () => {
        setList([...list,{guid:crypto.randomUUID(),value:input}])
    }

    const handleRemoveList = (guid) => {
        setList([...list.filter(item => item.guid !== guid)]);
    }

    return (
        <Container style={{border:'1px solid black', padding:20}}>
            <h3>Inspiring sculptors</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control placeholder="Enter name" onChange={e => setInput(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleAddList}>
                    Add
                </Button>
            </Form>
            <hr/>
            <ListGroup>
                {
                    list.map(item => 
                        <ListGroup.Item><Button variant='danger' onClick={() => handleRemoveList(item.guid)}>Remover</Button> {item.value}</ListGroup.Item>
                    )
                }
            </ListGroup>
        </Container>
    )
}

function ShapeEditor(){
    const [x,setx] = useState(10);

    return (
        <Container>
            <Container style={{border:'1px solid gray',backgroundColor:'lightgray',position:"relative",padding:0,height:200}}>
                <Container style={{backgroundColor:"red",height:20,width:20,padding:0,borderRadius:40,top:50,position:'absolute',left:x}}/>
                <Container style={{backgroundColor:"red",height:20,width:20,padding:0,borderRadius:40,top:25,position:'absolute',left:x}}/>
            </Container>
            <Button onClick={() => setx(prev => prev + 25)}>
                Move
            </Button>
        </Container>
    )
}

function CounterList(){

    return (
        <Container>
            <Counter/>
            <Counter/>
            <Counter/>
        </Container>
    );
}

function BucketList(){
    return (
        <Container>
            <h3>Art Bucket List</h3>
            <h4>My list of art to see</h4>
            <Form>
                <ul>
                    <li>
                        <Form.Check
                            type='checkbox'
                            label='- Big Belles'
                        />
                        <Form.Check
                            type='checkbox'
                            label='- Big'
                        />
                        <Form.Check
                            type='checkbox'
                            label='- Terracota'
                        />
                    </li>
                </ul>
            </Form>
        </Container>
    )
}