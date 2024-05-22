export default function Activity3(){
    return (
        <div>
            <article>
                <h1>My First Component</h1>
                <ol>
                    <li>Components: UI Building Blocks</li>
                    <li>Defining a Component</li>
                    <li>Using a Component</li>
                </ol>
            </article>
            <br/>
            <hr/>
            <div>
                <Gallery/>
            </div>
            <br/>
            <hr/>
            <div>
                <ProfileNew/>
            </div>
            <br/>
            <hr/>
            <div>
                <PackingList/>
            </div>
            <br/>
            <hr/>
            <div>
                <ListName/>
            </div>
            <br/>
            <hr/>
            <div>
                <List/>
            </div>
            <br/>
            <hr/>
            <div>
                <Recipe/>
            </div>
            <br/>
            <hr/>
            <div>
                <TeaGathering/>
            </div>
        </div>
    );
}

function Gallery(){
    return (
        <>
            <Profile src="https://upload.wikimedia.org/wikipedia/commons/d/d8/LA2-NSRW-1-0370.jpg"/>
            <Profile src="https://upload.wikimedia.org/wikipedia/commons/d/d8/LA2-NSRW-1-0370.jpg"/>
            <Profile src="https://upload.wikimedia.org/wikipedia/commons/d/d8/LA2-NSRW-1-0370.jpg"/>
        </>
    )
}

function Profile({src}){
    return <img
        src={src}
        width={100}
        height={100}
    />;
}

function TeaGathering(){
    let cups = [];
    for (let i = 0; i < 5; i++) {
        cups.push(<Cup key={i} guest={i}/>);
    }
    return cups;
}

function Cup({guest}){
    return <h2>Tea cup for guest #{guest}</h2>;
}

function Recipe(){
    return (
        <section>
            <h1>Spiced Chai Recipe</h1>
            <h2>For two</h2>
            <Step drinkers={2}/>
            <h2>For a gathering</h2>
            <Step drinkers={4}/>
        </section>
    );
}

function Step({drinkers}){
    return (
        <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons</li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar.</li>
        </ol>
    );
}

const people = [
    {
        id: 0,
        name: "Maria",
        profession: "matemática",
        accomplishment: "cálculos",
        imageId: "https://images.pexels.com/photos/4668523/pexels-photo-4668523.jpeg"
    },{
        id:1,
        name:'Olivia',
        profession: "física",
        accomplishment: "cálculos",
        imageId: "https://images.pexels.com/photos/8028311/pexels-photo-8028311.jpeg"
    }
];

function List(){
    const listItems = people.map((person,i) => 
        <li key={i}>
            <img
                src={person.imageId}
                alt={person.name}
                width={100}
                height={100}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    return <ul>{listItems}</ul>;
}

const listPeople = [
    'Maria: Física',
    'Olivia:Matemática'
];

function ListName(){
    const listItems = listPeople.map(person => <li>{person}</li>);

    return <ul>{listItems}</ul>
}

function PackingList(){
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                /><br/>
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                /><br/>
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}

function Item({name, isPacked}){
    let itemContent = name;
    if(isPacked){
        itemContent = (
            <del>
                {name + ' x'}
            </del>
        )
    }

    return (
        <li className="item">
            {itemContent}
        </li>
    )
}

function ProfileNew(){
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name:'Olívia',
                    imageId: "https://i.pinimg.com/originals/05/6d/85/056d85cadea61e1a7817daabd8bb30bf.jpg"
                }}
            />
        </Card>
    )
}

function Avatar({person,size}){
    return (
        <img
            className="avatar"
            src={person.imageId}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

function Card({children}){
    return (
        <div className="card">
            {children}
        </div>
    )
}