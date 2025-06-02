function Flex() {
    return (
        <div>
            <div className='grid  sm:grid-cols-12'>
                <div className='col-span-12 sm:col-span-5 bg-red-500'>Hi there, I am learning flex</div>
                <div className='col-span-12 sm:col-span-5 bg-blue-500'>Hi there, I am learning flex</div>
                <div className='col-span-12 sm:col-span-2 bg-green-800'>Hi there, I am learning flex</div>
                
            </div>

            <div className='flex justify-around'>

                <div className='sm:bg-blue-400 bg-red-500 text-2xl'>Hi there, I am learning flex</div>
                <div className='bg-blue-500 rounded-md'>Hi there, I am learning flex</div>
                <div className='bg-green-800'>Hi there, I am learning flex</div>
            </div>
        </div>
    )
}
export default Flex;