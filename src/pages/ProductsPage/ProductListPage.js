import ProductList from '../../components/ProductList/ProductList'
import ProductItem from '../../components/ProductItem/ProductItem'


function Menu() {
    var products = []
    var showProductItem = (products) => {
        var result = ''
        if(products.length>0) {
            result = products.map((product, index) => {
                <ProductItem 
                    key={index}
                    product={product}
                    index={index}
                />
            })
        }
        return result
    }
    return (
        <div className="container">

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                    <button type="button" className="btn btn-info mb-10">
                        Thêm sản phẩm
                    </button>

                    <ProductList >
                        {showProductItem(products)}
                    </ProductList>


                </div>
            </div>

        </div>


    );
}

export default Menu;
