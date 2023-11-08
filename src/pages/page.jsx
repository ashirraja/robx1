export default function Page() {

    return (
      <>
<div className="bg-blue-900 min-h-screen w-full flex items-center justify-center">
  <div className="">
    <p className="text-xl text-gray-500 font-bold mb-4">Describe your Image</p>
    <input
      className="rounded border border-gray-300 bg-gray-100 p-2 w-[1000px] mb-4"
      type="text"
      placeholder="Enter your text here"
    />
    <p className="text-xl text-gray-500 font-bold mb-4">Negative prompt</p>
    <input
      className="rounded border border-gray-300 bg-gray-100 p-2 w-[1000px] mb-4"
      type="text"
      placeholder="text, blurry"
    />
    <div className="flex justify-end">
      <button className="rounded-full bg-blue-500 text-white py-2 px-4">
        Your Button
      </button>
    </div>
  </div>
</div>



    
    
    </>
    )
  }
