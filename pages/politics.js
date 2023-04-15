import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { Client } from "../prismic-configuration";
import Link from "next/link";
import Layout from "../components/Layout";

export default function politics({ articles, trendings }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>Channel 21: Politics</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-2xl uppercase font-bold opacity-50 my-10 ml-24">
          See what's going around in the World of Politics.
        </h1>
        <div className="flex">
          <div className="flex flex-col w-2/3 ml-24 mr-20">
            {
              articles.results.map((article, index)=> (
                  <div>
                   <Link legacyBehavior href= {`test/${article.uid}`}>
                      <h1 className="bold text-3xl text-blue-600 cursor-pointer">
                        {`${article.data.testtitle}`}
                      </h1> 
                    </Link>
                    <img className="w-2/3" src={article.data.testfeatureimage.url} alt="img"/> 
                    <h1>
                      {RichText.render(article.data.testdescription)}
                    </h1> 
                  </div>
                )
              )
            }
          </div>
          <div className="flex flex-col w-1/3">
            <h1 className="text-xl uppercase font-bold opacity-50 my-10 ml-24">
              See what's trending
            </h1>
            {
              trendings.results.map((trending, index)=> (
                  <div key={trending.uid}>
                  <Link legacyBehavior href= {`trendings/${trending.uid}`}>
                      <h1 className="bold text-xl text-blue-600 cursor-pointer">
                        {`${trending.data.title}`}
                      </h1> 
                    </Link>
                    <hr className="mt-5"/>
                    {/* <img className="w-2/3" src={trending.data.freatureimg.url} alt="img"/> 
                    <h1>
                      {RichText.render(trending.data.description)}
                    </h1>  */}
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const articles = await Client().query(
    Prismic.Predicates.at("document.tags", ["Politics"])
  );
  const trendings = await Client().query(
    Prismic.Predicates.at("document.type", "trendings")
  );

  return {
    props: {
      articles: articles,
      trendings: trendings,
    },
  };
}