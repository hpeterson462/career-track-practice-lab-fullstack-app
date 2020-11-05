import React from 'react';
import { createCard } from '../../actions/cardActions';

const CreateCard = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.name === 'name') setName(target.value);
    if (target.description === 'description') setName(target.description);
    if (target.cost === 'cost') setName(target.cost);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createCard({
      name,
      description,
      cost
    }));
    setName('');
    setDescription('');
    setCost('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htlmFor="card-name">Card Name</label>
      <input id="card-name" type="text" name="name" value={name} onChange={handleChange} />

      <textarea id="card-description" name="description" value={description} onChange={handleChange}></textarea>

      <input id="card-cost" type="number" name="cost" value={cost} onChange={handleChange} />
      <button>Create Card</button>
    </form>
  );
};

export default CreateCard;
