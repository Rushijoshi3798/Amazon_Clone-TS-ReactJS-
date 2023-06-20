import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useGetProductDetailsBySlugQuery } from "../hooks/productHooks";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";

const ProductPage = () => {
  const params = useParams();
  const { slug } = params;
  const {
    data: product,
    refetch,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(slug!);

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : !product ? (
    <MessageBox variant="danger">Product Not Found</MessageBox>
  ) : (
    <div>
      <Helmet>
        <title>Product Page</title>
      </Helmet>
      <Row>
        <Col md={6}>
          <img src={product.image} alt={product.name} className='large' />
        </Col>
        <Col md={3}>
          
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
};

export default ProductPage;
