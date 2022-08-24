import { useState } from "react";
import "./newProduct.css";

export default function NewProduct({ newProduct, productImg }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("images/beer.jpeg");
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState(0.0);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setselectedFile] = useState();

  //   submit handle
  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please a Product!");
      return;
    }
    newProduct({ name, img, stock, status, price });
    setName("");
    setImg("images/beer.jpeg");
    setStock(0);
    setStatus("");
    setPrice(0.0);
  };

  const options = [
    {
      label: "On stock",

      value: "On stock",
    },

    {
      label: "Out of stock",

      value: "Out of stock",
    },
  ];
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
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            placeholder="stock number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="ksh. 0.00"
            min={0.0}
            step={"0.01"}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            onChange={(e) => setStatus({ status: e.target.value })}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
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
