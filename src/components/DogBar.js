// import { useEffect } from "react"

function DogBar({dogs}) {
    const singleDog = dogs.map((dog) => <span>{dog.name}</span>)
    console.log(singleDog)


    return (
        <span> {singleDog} </span>
    )
}

export default DogBar;