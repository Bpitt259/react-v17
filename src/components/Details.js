import { useParams } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

const Details = () => {
  const { id } = useParams();
  const product = useStoreState((state) => state.getProduct(id));

  if (!product) return null;
  return (
    <div>
      {product.id} {product.name}
    </div>
  );
};

export default Details;
