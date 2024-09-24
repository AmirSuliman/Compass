

const Profile =()=>{

    return(
        <div>
            <h1 className="font-semibold text-2xl">Profile</h1>
            <p className="text-sm text-[#6B7280]">Lorum ipsum lorum ipsum Lorum ipsum lorum ipsum Lorum ipsum lorum ipsum Lorum ipsum lorum ipsum</p>

            <div className="bg-white p-4 mt-6 rounded-md">
                <div className="flex flex-row gap-8 items-center justify-start">
                    <img src="/memoji.png" alt="img"/>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl font-medium">John deo</h1>
                      <p className="text-[#525252] text-sm">Lorum ipsum lorum ipsum</p>
                    </div>
                </div>

                <form className="mt-6 p-2 space-y-4">
                    <label className="text-gray-700">
                          Name
                     </label>
                    <div className="flex flex-row gap-6">
                    <input
                    type="text"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Frist Name"
                  />
                   <input
                    type="text"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Frist Name"
                  />
                </div>

                <label className="block w-full">
                  <span className="text-gray-700 ">Enter Email</span>
                  <input
                    type="email"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Johndoe123@gmail.com"
                  />
                </label>
                <div className="flex flex-row gap-6 w-full">
                    <label className="w-full">
                        Company Name
                    <input
                    type="text"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Enter here"
                  />
                  </label>
                  <label className="w-full">
                      Job Role
                  <input
                    type="text"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Enter here"
                  />
                  </label>
                 </div>
                 
                 <div>
                 <label>
                   Business Sector
                   <select
                     className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                   >
                     <option value="">Select your age</option>
                     <option value="35-44">option</option>
                     <option value="45-54">option</option>
                     <option value="55-64">option</option>
                     <option value="65+">option</option>
                   </select>
                 </label>
                 </div>

                 <label className="block w-full">
                  <span className="text-gray-700 ">Address</span>
                  <input
                    type="email"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Enter here"
                  />
                </label>

                <div className="flex flex-row gap-6 w-full">
                    <label className="w-full">
                        City
                    <input
                    type="text"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Enter here"
                  />
                  </label>
                  <label className="w-full">
                      State
                  <input
                    type="text"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Enter here"
                  />
                  </label>
                 </div>
                
                 <label className="block w-full">
                  <span className="text-gray-700 ">Bio</span>
                  <textarea
                    type="email"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Enter here"
                  />
                </label>


                <div className="text-right mt-8 ">
              <button
                type="submit"
                className="border text-black font-normal px-8 py-2 px-4 rounded-full mr-4 "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white font-normal px-8 py-2 px-4 rounded-full "
              >
                update
              </button>
            </div>


                </form>

            </div>
        </div>
    )
}
export default Profile;