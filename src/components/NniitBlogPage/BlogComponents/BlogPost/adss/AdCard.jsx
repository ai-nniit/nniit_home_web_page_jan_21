function AdCard({ image, alt }) {
    return (
      <div className="rounded-lg overflow-hidden shadow-md ">
        <img
          src={image}
          alt={alt}
          className="w-full h-48 object-cover"
        />
      </div>
    );
  }
  
  export default AdCard;