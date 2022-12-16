import React from 'react';
import SectionHeader from '../../SharedPage/SectionHeader/SectionHeader';
import NormalButton from '../../Utilities/NormalButton';

const Contuctus = () => {

    const handleformsubmit = (e)=>{
        e.preventDefault()
        const form = e.target;

        const email = form.email.value;
        const description = form.description.value;

        form.reset()
        console.log(email, description)
    }
    return (
      <div id="hireme" className="w-[1170px] mx-auto ">
        <SectionHeader firstext={"Contuct Info"}></SectionHeader>
        <p className='text-center'>Send a email or Call me</p>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 my-6 items-center">
          <div className="pr-6 flex justify-center ">
            <img
              className="w-full h-[350px] rounded"
              src="development.gif"
              alt=""
            />
          </div>
          <div className="bg-slate-600 px-2 py-16 rounded">
            <form onSubmit={handleformsubmit}>
              <div className="flex flex-col items-start justify-center my-auto">
                <input
                  type="email"
                  name="email"
                  placeholder="Type Email"
                  className="input w-2/3 bg-slate-300 input-bordered my-2 text-slate-600"
                />
                <textarea
                  type="text"
                  name="description"
                  placeholder="Type Description"
                  className="input p-4 h-[116px] w-2/3 bg-slate-300 input-bordered my-2 text-slate-600"
                  cols="30"
                  rows="10"
                ></textarea>

                <NormalButton classes={"bg-[#f507f5] btn-sm "}>
                  Submit
                </NormalButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contuctus;