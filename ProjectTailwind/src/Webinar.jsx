function Webinar() {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-blue-900">
            <h3 className="text-green-800 text-3xl mb-20">Webinar.gg</h3>
            <h2 className="text-2xl text-white mb-10">Verify Your Age</h2>
            <div className="flex flex-col justify-center items-center  mb-20">
                <p className="text-gray-400 ">Please confirm your birth year.This data will not be stored.</p>
                <input className="w-80 h-12 bg-gray-500 text-black mt-4 px-4 py-2 rounded-md" type="text" placeholder="Your Birth Year" />
                <br />
                <button className="w-80 h-10 bg-gray-400 rounded-md text-white" >Continue</button>
            </div>
        </div>
    )
}
export default Webinar;