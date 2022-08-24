import { useState } from "react";
import "./newProduct.css";

export default function NewProduct({ newProduct, productImg, categories }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("images/beer.jpeg");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("Others");
  const [purchasePrice, setPurchasePrice] = useState(0.0);
  const [sellingPrice, setSellingPrice] = useState(0.0);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setselectedFile] = useState();

  //   submit handle
  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please a Product!");
      return;
    }
    newProduct({ name, img, quantity, category, sellingPrice, purchasePrice });
    setName("");
    setImg("images/beer.jpeg");
    setQuantity(0);
    setCategory("");
    setSellingPrice(sellingPrice);
    setPurchasePrice(0.0);
  };

  // image handle
  const imgUpload = async (event) => {
    setselectedFile(event.target.files[0]);

    const formData = new FormData();
    formData.append("imgFile", selectedFile); // file will be accessed by imgFile
    productImg(formData);

    setImg(await selectedFile.name);
    // save locally
    if (selectedFile.type !== "image/png") {
      setIsSelected(false);
    }

    setIsSelected(true);
  };
  const optionQuantity = [
    {
      label: "1000ml",
      value: "1000ml",
    },
    {
      label: "750ml",
      value: "750ml",
    },
    {
      label: "500ml",
      value: "500ml",
    },
    {
      label: "250ml",
      value: "250ml",
    },
  ];

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={onSubmit}>
        {/* image upload */}
        <div className="addProductItem">
          <label htmlFor="image">Image</label>
          <input type="file" id="file" onChange={imgUpload} />
        </div>
        {isSelected ? (
          <div>
            <p>Filename: {selectedFile.name}</p>

            <p>Filetype: {selectedFile.type}</p>

            <p>Size in bytes: {selectedFile.size}</p>

            {/* <p>
              lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p> */}
          </div>
        ) : (
          <p>Select Product image</p>
        )}

        <div className="addProductItem">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="quantity">Quantity in ml</label>
          <select
            name="quantity"
            id="quantity"
            defaultValue={0}
            onChange={(e) => setQuantity({ quantity: e.target.value })}

          >
            <option value={0} disabled>
              Choose Quantity in ml
            </option>
            {optionQuantity.map((quantity, index) => (
              <option key={index} value={quantity.value} required>
                {quantity.label}
              </option>
            ))}
          </select>
        </div>
        <div className="addProductItem">
          <label htmlFor="purchasePrice">Purchase price</label>
          <input
            type="number"
            placeholder="ksh. 0.00"
            min={0.0}
            step={"0.01"}
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            required
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="sellingPrice">Selling price</label>
          <input
            type="number"
            placeholder="ksh. 0.00"
            min={0.0}
            step={"0.01"}
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            required
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            defaultValue={"Others"}
            
            onChange={(e) => setCategory({ category: e.target.value })}
          >
            <option value={"Others"} disabled>
              Choose Brand
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          
        </div>

        <input
          type="submit"
          value={"Add product"}
          className="addProductButton"
        />
      </form>
    </div>
  );
}
