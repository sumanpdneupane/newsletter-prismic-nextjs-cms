import { Client } from "../../prismic-configuration"
import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function test({article}) {
    return (
        <Layout>
          <div>
            <h1 className="text-2xl uppercase font-bold opacity-50 my-10 ml-24">
                {`${article.data.testtitle}`}
            </h1>

            <img className="w-2/3" src={article.data.testfeatureimage.url} alt="img"/> 

            <h1>
                {RichText.render(article.data.testdescription)}
            </h1> 

            <Link legacyBehavior href="/">
                <button className="bg-black text-white py-3 px-10 my-4 text-lg uppercase">
                    Back to Home &nbsp;
                </button>
            </Link>
            
          </div>
        </Layout>
      );
}

export async function getServerSideProps(context) {
    //console.log("test----> ", "Here");

    const article = await Client().getByUID("test", context.query.test)

    //console.log("test----> ", article);

    return{
        props:{
            article,
        }
    }
}