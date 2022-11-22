export const RadioButton = ({ label, state, value, onChange }) => {
    return (
      <label>
        <input required name='button' type="radio" checked={state === value } onChange={()=>onChange(value)} />
        {label}
      </label>
    );
  };