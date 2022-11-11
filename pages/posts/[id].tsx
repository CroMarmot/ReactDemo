import Layout from '../../components/layout';

export default function Post({ postData }: { postData: { title: string, id: string, date: string } }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

import { getAllPostIds, getPostData } from '../../lib/posts';


export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}