


const Survey = () => {
    return (
      <>
        <h1 className="text-[24px] font-semibold">Fill the survey</h1>
  
        <div className="bg-white rounded-lg p-4 px-6 mt-4 border border-[#BCBCBC] shadow-sm">
          <form>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-row w-full gap-4">
                <label className="block w-1/2">
                  <span className="text-gray-700 ">Enter your First Name</span>
                  <input
                    type="text"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Frist Name"
                  />
                </label>
                <label className="block w-1/2">
                  <span className="text-gray-700">Enter your Last Name</span>
                  <input
                    type="text"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Last Name"
                  />
                </label>
              </div>

              <div className="flex flex-row w-full gap-4">
                <label className="block w-1/2">
                  <span className="text-gray-700 ">Enter Email</span>
                  <input
                    type="email"
                    className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                    placeholder="Johndoe123@gmail.com"
                  />
                </label>
                <label className="block w-1/2">
                   <span className="text-gray-700">Enter your Age</span>
                   <select
                     className="mt-1 block w-full text-sm text-gray-700 p-4 border rounded-md"
                   >
                     <option value="">Select your age</option>
                     <option value="18-24">18-24</option>
                     <option value="25-34">25-34</option>
                     <option value="35-44">35-44</option>
                     <option value="45-54">45-54</option>
                     <option value="55-64">55-64</option>
                     <option value="65+">65+</option>
                   </select>
                 </label>
              </div>                   
             
             <div className="p-2 space-y-4">
             <div>
                <p>1. Lorem Ipsum Ha Sido El Texto De Relleno Estándar De Las El Texto De Relleno Estándar De Las?</p>
                <div className="flex flex-row gap-2 sm:gap-12 p-2">
                <label>
                  <input type="radio" name="question1" value="option1" />
                  Lorem Ipsum
                </label>
                <label>
                  <input type="radio" name="question1" value="option2" />
                  Lorem Ipsum
                </label>
                <label>
                  <input type="radio" name="question1" value="option3" />
                  Lorem Ipsum
                </label>
                <label>
                  <input type="radio" name="question1" value="option4" />
                  Lorem Ipsum
                </label>
                </div>
              </div>

              <div>
                <p>2. Lorem Ipsum Ha Sido El Texto De Relleno Estándar De Las El Texto De Relleno Estándar De Las?</p>
                <div className="flex flex-row gap-2 sm:gap-12 p-2">
                <label>
                  <input type="radio" name="question1" value="option1" />
                  Lorem Ipsum
                </label>
                <label>
                  <input type="radio" name="question1" value="option2" />
                  Lorem Ipsum
                </label>
                <label>
                  <input type="radio" name="question1" value="option3" />
                  Lorem Ipsum
                </label>
                <label>
                  <input type="radio" name="question1" value="option4" />
                  Lorem Ipsum
                </label>
                </div>
              </div>

              <div>
              <p>3. Lorem Ipsum Ha Sido El Texto De Relleno Estándar De Las El Texto De Relleno Estándar De Las?</p>
              <select
                     className="mt-1 block w-2/3 text-sm text-gray-700 p-4 border rounded-md"
                   >
                     <option value="">Select your age</option>
                     <option value="18-24">option </option>
                     <option value="25-34">option </option>
                     <option value="35-44">option </option>
                     <option value="45-54">option </option>
                     <option value="55-64">option </option>
                   </select>
               </div>

               <div>
                <p>4. Lorem Ipsum Ha Sido El Texto De Relleno Estándar De Las El Texto De Relleno Estándar De Las?</p>
                <div className="flex flex-row gap-2 sm:gap-12 p-2">
                <label>
                  <input type="radio" name="question1" value="option1" />
                  Lorem Ipsum
                </label>
                <label>
                  <input type="radio" name="question1" value="option2" />
                  Lorem Ipsum
                </label>
                <label>
                  <input type="radio" name="question1" value="option3" />
                  Lorem Ipsum
                </label>
                <label>
                  <input type="radio" name="question1" value="option4" />
                  Lorem Ipsum
                </label>
                </div>
              </div>
             </div>
             
             </div>
             

            <div className="text-right mt-8">
              <button
                type="submit"
                className="bg-[#FDC546] text-black font-medium px-16 py-2 px-4 rounded-full "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
  
  export default Survey;