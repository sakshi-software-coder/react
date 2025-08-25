function Card(props){
    let name=props.userName
    let btn=props.btnText
    return(
        <>
        <div className="max-w-xs rounded-md shadow-md mb-12 bg-black pb-4">
        <img
          src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
        </div>
<div>
  <button className="bg-green-700 text-black px-4 py-2 rounded-md">
    {btn || "visit me"}
  </button>
</div>

      </div>
        </>
    )
}

export default Card;