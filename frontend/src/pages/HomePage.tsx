import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { useGetProductsQuery } from "../hooks/productHooks";
import { ApiError } from "../types/ApiError";
import { product } from "../types/product";
import { getError } from "../utils";

// type State = {
//   products: product[];
//   loading: boolean;
//   error: string;
// };

// type Action =
//   | {
//       type: "FETCH_REQUEST";
//     }
//   | {
//       type: "FETCH_SUCCESS";
//       payload: product[];
//     }
//   | {
//       type: "FETCH_FAIL";
//       payload: string;
//     };

// const initialState: State = {
//   products: [],
//   loading: true,
//   error: "",
// };

// const reducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return { ...state, loading: true };
//     case "FETCH_SUCCESS":
//       return { ...state, loading: false, products: action.payload };
//     case "FETCH_FAIL":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

const HomePage = () => {
  // const [{ loading, error, products }, dispatch] = useReducer<
  //   React.Reducer<State, Action>
  // >(reducer, initialState);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({ type: "FETCH_REQUEST" });
  //     try {
  //       const result = await axios.get("/api/products");
  //       dispatch({ type: "FETCH_SUCCESS", payload: result.data });
  //     } catch (err) {
  //       dispatch({ type: "FETCH_FAIL", payload: getError(err as ApiError) });
  //     }
  //   };
  //   fetchData();
  // }, []);

  //********************************************* 
  // All of commented out code is now not needed as we have made a hook to sent query at the first place. just one line of code is needed (see below)
 // **********************************************

  const { data: products, isLoading, error } = useGetProductsQuery();

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>Apni Dukan</title>
      </Helmet>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default HomePage;
