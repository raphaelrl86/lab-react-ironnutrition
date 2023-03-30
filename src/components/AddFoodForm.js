import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={() => {}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={() => {}}/>

      <label>Calories</label>
      <Input value={calories} type="text" onChange={() => {}}/>

      <label>Servings</label>
      <Input value={sevingsq} type="text" onChange={() => {}}/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;