import { useFormik } from 'formik'
import axios from 'axios'
import React from 'react'
import * as Yup from 'yup';

const addProductsValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name boş bırakılamaz"),
    unitPrice: Yup.number().required("Unit Price boş bırakılmaz").positive().integer(),
    unitsInStock: Yup.number().required("Stock boş bırakılmaz").positive().integer(),
    quantityPerUnit: Yup.number().required("Quantity boş bırakılmaz")
})

function ProductsForm() {

    const formik = useFormik({
        initialValues: {
            name: "",
            unitPrice: "",
            unitsInStock: "",
            quantityPerUnit: ""
        },
        validationSchema: addProductsValidationSchema,
        onSubmit: (values) => {
            axios.post('https://northwind.vercel.app/api/products', values)
                .then(res => {
                    console.log('Success!');
                })
        }
    })



    return (<>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="">Product Name</label>
                <input type='text' name='name' onChange={formik.handleChange}
                    value={formik.values.name} />
                {formik.errors.name ? <p style={{ color: 'red' }}>{formik.errors.name}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Unit Price</label>
                <input type='text' name='unitPrice' onChange={formik.handleChange}
                    value={formik.values.unitPrice} />
                {formik.errors.unitPrice ? <p style={{ color: 'red' }}>{formik.errors.unitPrice}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Stock</label>
                <input type='text' name='unitsInStock' onChange={formik.handleChange}
                    value={formik.values.unitsInStock} />
                {formik.errors.unitsInStock ? <p style={{ color: 'red' }}>{formik.errors.unitsInStock}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Quantity</label>
                <input type='text' name='quantityPerUnit' onChange={formik.handleChange}
                    value={formik.values.quantityPerUnit} />
                {formik.errors.quantityPerUnit ? <p style={{ color: 'red' }}>{formik.errors.quantityPerUnit}</p> : <></>}
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>


    </>)
}

export default ProductsForm