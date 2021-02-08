/* eslint-disable jsx-a11y/no-onchange */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Details = () => {
  const { id } = useParams();
  const product = useStoreState((state) => state.getProduct(id));
  const handleAddToCart = useStoreActions((state) => state.addToCart);
  // local state [item, fn]
  const [localOptions, setOptions] = useState({});

  const { id: productId, name, brand, price, available, weight, options } = product;

  const handleChangeOptions = (e) => {
    setOptions({
      ...localOptions,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectOption = (idx) => {
    setOptions(product.options[idx]);
  };

  const Select = ({ option, values }) => (
    <select key={option} name={option} id={option} onChange={handleChangeOptions}>
      {values.map((val) => (
        <option value={val}>{val}</option>
      ))}
    </select>
  );

  const Option = ({ option, value }) => (
    <div key={option}>
      {option}: {typeof value === 'object' ? <Select option={option} values={value} /> : value}
    </div>
  );

  if (!product) return null;

  console.log(localOptions);
  return (
    <div>
      <div>productId: {productId}</div>
      <div>name: {name}</div>
      <div>brand: {brand}</div>
      <div>price: {price}</div>
      <div>available: {available ? 'yes' : 'no'}</div>
      <div>weight: {weight}</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          width: '100px',
        }}
      >
        {/* product options - DOES NOT CHANGE */}
        {options.map((option, idx) => (
          <button type="button" key={option.color} onClick={() => handleSelectOption(idx)}>
            {option.color}
          </button>
        ))}

        {/* local options, THESE CHANGE */}
        {localOptions &&
          Object.keys(localOptions).map((key) => <Option option={key} value={localOptions[key]} />)}
      </div>

      {/* send the product with the chosen options to the cart */}
      <button type="button" onClick={() => handleAddToCart({ ...product, options: localOptions })}>
        Add To Cart
      </button>
    </div>
  );
};

export default Details;
