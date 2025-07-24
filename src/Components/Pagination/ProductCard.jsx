const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};
export default ProductCard;
