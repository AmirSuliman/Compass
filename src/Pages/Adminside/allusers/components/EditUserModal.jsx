import { useEffect } from "react"
import Avatar from "/images/all-users-modal-avatar.png"

const EditUserModal = ({ setIsModalOpen }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [setIsModalOpen])

  return (
    <div
      className='relative z-10'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      {/* Background backdrop with blur and smooth opacity transition */}
      <div
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm duration-500'
        aria-hidden='true'
        onClick={() => setIsModalOpen(false)} // Close on backdrop click
      ></div>

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-500 sm:my-8 sm:w-full sm:max-w-4xl'>
            <div className='bg-white px-6 py-4 md:px-16 md:py-12'>
              <div className='grid gap-8'>
                <div className='flex items-center flex-col gap-6'>
                  <img src={Avatar} alt='' className='aspect-square' />
                  <span className='font-semibold text-2xl md:text-4xl'>Edit User</span>
                </div>

                <div className='grid grid-cols-1 gap-4'>
                  <input
                    type='text'
                    placeholder='Username'
                    className='p-4 rounded-lg bg-[#d7d7d7]'
                  />
                  <input
                    type='email'
                    placeholder='Email'
                    className='p-4 rounded-lg bg-[#d7d7d7]'
                  />
                  <input
                    type='number'
                    placeholder='Phone no'
                    className='p-4 rounded-lg bg-[#d7d7d7] appearance-none'
                    style={{ '-moz-appearance': 'textfield', '-webkit-appearance': 'none' }}
                  />
                  <input
                    type='password'
                    placeholder='Password'
                    className='p-4 rounded-lg bg-[#d7d7d7]'
                  />
                </div>

                <div className='grid gap-4'>
                  <span className='font-bold'>Allowed Payout Methods</span>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    <div className='flex items-center gap-1'>
                      <input type='checkbox' />
                      <span className='text-sm font-semibold'>
                        [Auto] PayPal 5% Extra fee (USD)
                      </span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <input type='checkbox' />
                      <span className='text-sm font-semibold'>
                        Payoneer (USD)
                      </span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <input type='checkbox' />
                      <span className='text-sm font-semibold'>
                        PayPal Invoice (USD)
                      </span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <input type='checkbox' />
                      <span className='text-sm font-semibold'>
                        [Auto] Stripe 5% Extra fee (USD)
                      </span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <input type='checkbox' />
                      <span className='text-sm font-semibold'>
                        Binance Pay (USD)
                      </span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <input type='checkbox' />
                      <span className='text-sm font-semibold'>
                        Stripe (INR)
                      </span>
                    </div>
                  </div>
                </div>

                <div className='text-center md:text-right md:mt-8'>
                  <button
                    className={`bg-yellow-500 rounded-full px-28 py-2 font-semibold`}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditUserModal
