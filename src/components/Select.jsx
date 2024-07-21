
import { useValues } from '../contexts/InputContext';

export default function Select() {
   const { count, dispatch } = useValues();

   function setCount(e) {
        dispatch({type: 'setCount', value: Number(e.target.value) })
   }
   return (
      <select
        className='grid max-w-1/2 mx-auto font-medium p-2 rounded-md mb-4'
         name='passphrase'
         id='passphrase'
         value={count}
         onChange={(e) => setCount(e)}
         style={{backgroundColor: '#2b3139'}}>
         <option value='12' >I have a 12 word Secret Phrase</option>
         <option value='24'>I have a 24 word Secret Phrase</option>
      </select>
   );
}
