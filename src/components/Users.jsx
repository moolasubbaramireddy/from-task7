import React from 'react';


const Users = () => {
  return (
    <>
    
        <div className='flex p-3 pb-5  user-bg bg-slate-100  '>
          <div>
            <div className=''>
                <h1 className=' text-sky-900 font-bold'>User</h1>
            </div>
            <div className=''>
                <input type='text' placeholder='FirstName' className="bg-slate-100 mt-2" /> <hr  />
                <input type='text' placeholder='LastName' className="bg-slate-100 mt-2" /> <hr />
                <input type='email' placeholder='Email ID' className="bg-slate-100 mt-2" /> <hr />
                <input type='number' placeholder='Mbile Number' className="bg-slate-100 mt-2" /> <hr />
            </div>
          </div>
          <div className='pl-16'>
            <div className='mt-6 ' >
            <input type='text' placeholder='Country' className="bg-slate-100 mt-2" /> <hr  />
            <input type='text' placeholder='City' className="bg-slate-100 mt-2" /> <hr  />

            </div>
          <div className='relative mt-2 ' >
            <br />
             <input type='submit' className='absolute right-0 h-6 w-14 text-white text-sm rounded-lg bg-sky-900 ' value='SAVE' />
          </div>
          </div>
        </div>
       
       
    </>
  );
}

export default Users;
