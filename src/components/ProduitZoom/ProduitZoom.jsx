import InnerImageZoom from 'react-inner-image-zoom';
import "react-inner-image-zoom/lib/styles.min.css";

const ProduitZoom = () => {

    return (
        <div className='produitZoom'>
            <InnerImageZoom zoomType='hover' zoomScale={1.5} img={'../src/images/mode 1.jpg'}
            />
        </div>
    )
}

export default ProduitZoom