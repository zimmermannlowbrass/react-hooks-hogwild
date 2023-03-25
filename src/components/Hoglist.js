import React, { useState } from "react";
import Hog from "./Hog";

function Hoglist( {hogs} ) {


    const [shownPigs, setShownPigs] = useState(hogs)
   

    let id = 0
    const hogList = shownPigs.map((hog) => {
        id ++
        return (
            <div key = {id}>
                <Hog hog = {hog}/>
            </div>
        )
    })

    function hanglePigFilter(e) {
        const choice = e.target.value
        if (choice === 'grease') {
            setShownPigs(hogs.filter(hog => hog.greased))
        } else if (choice === 'no grease') {
            setShownPigs(hogs.filter(hog => !hog.greased))
        } else {
            setShownPigs(hogs)
        }
    }

	const weights = shownPigs.map(hog => hog.weight)
	const sortedWeights = weights.sort()

	const names = shownPigs.map(hog => hog.name)
	const sortedNames = names.sort()

	function sortByName(){
		const namedPigs = []
		for (const x of sortedNames) {
			namedPigs.push(shownPigs.find(hog => hog.name === x))
		}
		setShownPigs(namedPigs)
	}

	function sortBySize(){
		const sizedPigs = []
		for (const x of sortedWeights) {
			sizedPigs.push(shownPigs.find(hog => hog.weight === x))
		}
		setShownPigs(sizedPigs)
	}

    console.log(hogList)

    return (
        <div>
            <form>
				<label>Name</label>
				<input type="radio" name='hi' value='name' onClick={sortByName}></input>
				<br></br>
				<label>Size</label>
				<input type="radio" name='hi' value='size' onClick={sortBySize}></input>
			</form>
            <select onChange={hanglePigFilter}>
                <option value={'all'}>Choose your piggs</option>
                <option value={'grease'}>GREASY</option>
                <option value ={'no grease'}>not too greasy</option>
            </select>
            {hogList}
        </div>
    )
}

export default Hoglist;