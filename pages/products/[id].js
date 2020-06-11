import Layout from "../../components/layout";
import Head from "next/head";
import { getAllProductIds, getProductData } from "../../lib/Products";

export default function ProductData({ productData }) {
  return (
    <Layout>
      {productData.title}
      <br />
      {productData.id}
      <br />
      {productData.date}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
