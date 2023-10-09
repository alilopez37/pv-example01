import Card from "../molecules/Card";


function SectionCharacter() {
    const character = {
        name: "Rick Sanchez",
        status:"Alive",
        species:"Human",
        origin : {
            name:"Earth (C-137)",
            url:"https://rickandmortyapi.com/api/location/1"
        },
        location:{
            name:"Citadel of Ricks",
            url:"https://rickandmortyapi.com/api/location/3"
        },
        image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    };
    return (
        <div>
            <Card character={character} />
        </div>        
      );
}

export default SectionCharacter;