/* eslint-disable jsx-a11y/no-onchange */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Details = () => {
  const { id } = useParams();
  const product = useStoreState((state) => state.getProduct(id));
  const handleAddToCart = useStoreActions(({ addToCart }) => addToCart);
  const [productBuffer, setProductBuffer] = useState(product);

  if (!product) return null;
  const { id: productId, name, brand, price, available, weight, options } = productBuffer;

  const handleChangeOptions = (e) => {
    console.log(e.target.value);

    setProductBuffer({
      ...productBuffer,
      [e.target.name]: e.target.value,
    });
  };

  const Select = ({ option, values }) => (
    <select name={option} id={option} onChange={handleChangeOptions}>
      {values.map((val) => (
        <option value={val}>{val}</option>
      ))}
    </select>
  );

  const Option = ({ option, value }) => (
    <div>
      {option}: {typeof value === 'object' ? <Select option={option} values={value} /> : value}
    </div>
  );

  console.log(productBuffer);
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
      <button type="button" onClick={() => handleAddToCart(productBuffer)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Details;
