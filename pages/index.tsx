import Header from '../components/Header'
import ProductList from '../components/ProductList'
import { IProduct } from '../components/Product'
import Footer from '../components/Footer'
import Head from 'next/head'

import  '../style/style.scss'

interface IIndexPage {
    products: IProduct[]
}

const Index = (props: IIndexPage) => {
    return (
        <div className="app">
            <Head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

                <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="ZTI3ZmNiNTItYTI1My00NjgzLThkNmEtOWU2YjFmOTVjNzU4NjM3MDI0NDExMTM0MDAyNDA5"></script>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" /> 
                <title>My Store</title>
            </Head>
            <Header />
            <main className='main'>
                <ProductList products={ props.products } />
            </main>
            <Footer />
        </div>
    )
}



Index.getInitialProps= async ({ req }) => {

    return {
        products: [
            {id: "mens-brown-shoe", name: "Men's Shoe", price: 75.00, image: "../static/mens-shoe.jpeg", tag: "Mens", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec vulputate leo, vitae faucibus sapien. Nunc tempor, velit at aliquet scelerisque, sem libero hendrerit lectus, vestibulum tempus velit ex ac arcu. In purus urna, sollicitudin pretium imperdiet nec, feugiat eu leo. Pellentesque quam nibh, pulvinar non varius sed, condimentum sagittis ex. "} as IProduct,
            {id: "blue-tie", name: "Blue Tie", price: 25.00, image: "../static/tie.jpeg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec vulputate leo, vitae faucibus sapien. Nunc tempor, velit at aliquet scelerisque, sem libero hendrerit lectus, vestibulum tempus velit ex ac arcu. In purus urna, sollicitudin pretium imperdiet nec, feugiat eu leo. Pellentesque quam nibh, pulvinar non varius sed, condimentum sagittis ex. "} as IProduct,
            {id: "mens-shirt", name: "Men's Shirt", price: 25.00, image: "../static/mens-shirt.jpeg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec vulputate leo, vitae faucibus sapien. Nunc tempor, velit at aliquet scelerisque, sem libero hendrerit lectus, vestibulum tempus velit ex ac arcu. In purus urna, sollicitudin pretium imperdiet nec, feugiat eu leo. Pellentesque quam nibh, pulvinar non varius sed, condimentum sagittis ex. "} as IProduct,
            {id: "mens-brown-shoe", name: "Men's Shoe", price: 75.00, image: "../static/mens-shoe.jpeg", tag: "Mens", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec vulputate leo, vitae faucibus sapien. Nunc tempor, velit at aliquet scelerisque, sem libero hendrerit lectus, vestibulum tempus velit ex ac arcu. In purus urna, sollicitudin pretium imperdiet nec, feugiat eu leo. Pellentesque quam nibh, pulvinar non varius sed, condimentum sagittis ex. "} as IProduct,
            {id: "blue-tie", name: "Blue Tie", price: 25.00, image: "../static/tie.jpeg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec vulputate leo, vitae faucibus sapien. Nunc tempor, velit at aliquet scelerisque, sem libero hendrerit lectus, vestibulum tempus velit ex ac arcu. In purus urna, sollicitudin pretium imperdiet nec, feugiat eu leo. Pellentesque quam nibh, pulvinar non varius sed, condimentum sagittis ex. "} as IProduct,
            {id: "mens-shirt", name: "Men's Shirt", price: 25.00, image: "../static/mens-shirt.jpeg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec vulputate leo, vitae faucibus sapien. Nunc tempor, velit at aliquet scelerisque, sem libero hendrerit lectus, vestibulum tempus velit ex ac arcu. In purus urna, sollicitudin pretium imperdiet nec, feugiat eu leo. Pellentesque quam nibh, pulvinar non varius sed, condimentum sagittis ex. "} as IProduct,

        ]
    }
}
export default Index