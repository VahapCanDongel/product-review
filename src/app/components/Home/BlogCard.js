export default function BlogCard() {
  return (
    <div className="card w-[400px] bg-base-100 rounded-md">
      <figure>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_GB?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359294"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
          Best Laptops To Buy 2023
          {/* <div className="badge badge-accent">NEW</div> */}
        </h2>
        <p>
          Selected top 5 laptops that you can buy. Laptops can be based on
          gaming or productivity.
        </p>
        <div className="flex flex-col">
          <div className="card-actions justify-end mt-4 ">
            <div className="badge badge-outline badge-primary">Technolgy</div>
            <div className="badge badge-outline badge-info">Gaming</div>
          </div>

          <div className="ml-auto my-2">July 11, 2023</div>
        </div>
      </div>
    </div>
  );
}
