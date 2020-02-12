import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import displayNotification from '../../pushNotification';

const AddProduct = (props) =>{

    const [prodName, setProdName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const productSubmit = (e)=>{
        let prodObj = {
            "productId": 0,
            "productName": prodName,
            "category": category,
            "price": price,
            "isAvailable": true,
            "description": description,
            "image": "shirt.png",
            "isFavourite": false
          }
          debugger;
          displayNotification(prodName);
    }

    return(
        <section className="addproduct">
        <div className="container">
            <div className="addproduct__box">
                <h3>Add Products</h3>
                <form onSubmit={productSubmit}>
                    <div className="form-group">
                        <label for="dress-select">Product Name:</label>
                        <input type="text" value={prodName} onChange={(e)=>setProdName(e.target.value)} />
                        {/* <select id="dress-select" name="dress" className="custom-select">
                            <option selected>Long Sleeve Shirt</option>
                            <option value="short">Short Sleeve Shirt</option>
                        </select> */}
                    </div>
                    <div className="form-group">
                        <label for="category-select">Category:</label>
                        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} />
                        {/* <select id="category-select" name="dress" className="custom-select">
                            <option selected>Long Sleeve Shirt</option>
                            <option value="short">Short Sleeve Shirt</option>
                        </select> */}
                    </div>
                    <div className="form-group">
                        <label for="price-add">Price:</label>
                        <input type="number" value={price} onChange={e=>setPrice(e.target.value)} className="form-control" id="price-add" />
                    </div>
                    <div className="form-group">
                        <label for="description-add">Description:</label>
                        <textarea className="form-control" value={description} onChange={e=>setDescription(e.target.value)} rows="5" id="description-add"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="image-choose">Image</label>
                        <input type="text" className="form-control" id="image-choose" name="filename"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default AddProduct;