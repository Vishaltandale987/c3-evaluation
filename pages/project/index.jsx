import React from "react";
import Head from "next/head";
import Projectpage from "../../compount/Projectpage";
// import project

function index({ apidata }) {
  console.log(apidata);
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta title="description"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {apidata &&
          apidata.map((e) => (
            <div
              style={{
                display: "grid",
                "grid-template-columns": "repeat(2, 1fr)",
                // "backgroundColor":"black"
                "border":"1px solid red"

              }}
              key={e.id}
            >
              <Projectpage
             
                id={e.id}
                name={e.full_name}
                language={e.language}
                stargazers_count={e.stargazers_count}
                watchers_count={e.watchers_count}
                visibility={e.visibility}
              />
            </div>
          ))}

        <h1>{apidata.message}</h1>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  let response = await fetch(
    `https://api.github.com/search/repositories?q=user:Vishaltandale987+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await response.json();
  return {
    props: {
      apidata: data.items,
    },
  };
}

export default index;















