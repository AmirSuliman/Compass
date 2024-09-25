import Nav from "./components/nav";

const AddCompetitors=()=>{

    return(
        <div>
        <div className="flex flex-row items-center justify-between">
            <h1 className="text-2xl font-semibold">Add Competitors</h1>
            <div className="text-white bg-black rounded-lg p-3 text-[12px]">
            Total Number of recommendation used
            </div>
        </div>
        
        <Nav/>
    </div>
    )
}

export default AddCompetitors;