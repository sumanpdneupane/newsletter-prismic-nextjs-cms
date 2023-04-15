import Head from "next/head";
import Layout from '../components/Layout';

import { RichText } from "prismic-reactjs";
import Link from "next/link";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";


export default function Home({articles, trendings}) {
  return (
    <div>
       <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout> 
        <h1 className="text-2xl uppercase font-bold opacity-50 my-10 ml-24">See what's happening around the world</h1>
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
      </Layout>
    </div>
  )
}

//This function is called whenever everytime a request/refresh is made
export async function getServerSideProps(){
  const articles = await Client().query(
    Prismic.Predicates.at("document.type", "test")
  );

  const trendings = await Client().query(
    Prismic.Predicates.at("document.type", "trendings")
  );

  console.log("articles----> ", articles);
  console.log("trendings----> ", trendings);

  return {
    props: {
      articles,
      trendings,
    }
  }
}
