const SiteBanner = () => {
    return (<>
        <div className='upperMainHomeBox'>
            <div className='mainHomeBox flex justify-around items-center flex-col '>
                <div className='flex flex-col item-center justify-around'>
                    <h1 className='text-5xl font-semibold tracking-wider uppercase text-center '>CAFE SHOP NAME</h1>
                    <h2 className='text-ellipsis uppercase m-4 text-red-50 text-center font-semibold'>drink on low time , stay awake for long time</h2>
                    <img src="src/photos/homeGif.gif" className='self-center' />
                </div>
            </div>
        </div>
    </>  );
}
 
export default SiteBanner;