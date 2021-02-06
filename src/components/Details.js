import { useParams } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Details = () => {
  const { id } = useParams();
  const product = useStoreState((state) => state.getProduct(id));
  const handleAddToCart = useStoreActions(({ addToCart }) => addToCart);

  if (!product) return null;
  const { id: productId, name, brand, price, available, weight, options } = product;

  const Select = ({ option, values }) => (
    <select name={option} id={option}>
      {values.map((val) => (
        <option value={val}>{val}</option>
      ))}
    </select>
  );

  const Option = ({ option, value }) => {
    return (
      <div>
        <div>
          {option}: {typeof value === 'object' ? <Select option={option} values={value} /> : value}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>productId: {productId}</div>
      <div>name: {name}</div>
      <div>brand: {brand}</div>
      <div>price: {price}</div>
      <div>available: {available ? 'yes' : 'no'}</div>
      <div>weight: {weight}</div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {options.map((option) => {
          return Object.keys(option).map((key) => {
            return <Option option={key} value={option[key]} />;
          });
        })}
      </div>
      <button type="button" onClick={() => handleAddToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Details;
