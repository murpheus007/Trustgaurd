
import { useValues } from '../contexts/InputContext';

export default function InputField() {
  const { inputs, count, visibility, dispatch } = useValues();

  // Create an array for input fields
  const inputFields = Array.from({ length: count}, (v, i) => i);

  // Handle input changes
  function handleChange(index, element) {
    dispatch({ type: 'setInputValue', index, value: element.target.value });
    console.log(inputs);
  }

  function handleToggle(index) {
    dispatch({type: 'toggleVisibility', index})
  }

  return (
    <div className={`${count === 12 ? 'grid grid-cols-2' : 'grid grid-cols-4'} gap-x-1 gap-y-2 mb-6`}>
      {inputFields.map((index) => (
        <div className='flex p-2 relative font-medium text-[14px]' key={index} style={{backgroundColor: '#2b3139'}}>
          <input
            className='outline-none bg-transparent'
            type={visibility[index] ? 'password' : 'text'}
            name={`phrase ${index + 1}`}
            placeholder={`Word #${index + 1}`}
            value={inputs[index] || ''} // Use the value from inputs array
            onChange={(e) => handleChange(index, e)} // Handle changes
            
          />
          <button className='absolute right-2' type="button" onClick={() => handleToggle(index)}>
          {visibility[index] ? (
            <svg className="text-iconNormal" fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.93933 5.06077L18.9393 21.0608L21.0606 18.9395L18.6138 16.4926L23 12L17.4447 6.30998C14.7539 3.55392 10.5671 3.26407 7.56164 5.44044L5.06065 2.93945L2.93933 5.06077ZM9.68714 7.56594C10.3788 7.20443 11.1655 7 12 7C14.7614 7 17 9.23858 17 12C17 12.8345 16.7956 13.6212 16.4341 14.3129L9.68714 7.56594Z" fill="currentColor"></path>
              <path d="M1 12L3.29029 9.65416L13.4882 19.8521C11.0565 20.3404 8.43922 19.6197 6.55528 17.69L1 12Z" fill="currentColor"></path>
            </svg>
          ) : (
            <svg className="text-iconNormal" fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="currentColor"></path>
              <path d="M6.55528 6.30998L1 12L6.55528 17.69C9.56231 20.77 14.4377 20.77 17.4447 17.69L23 12L17.4447 6.30998C14.4377 3.23001 9.56232 3.23 6.55528 6.30998ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          )}
        </button>
        </div>
      ))}
    </div>
  );
}
