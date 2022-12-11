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
          apidata.map((ele) => (
            <div
              style={{
                display: "grid",
                "grid-template-columns": "repeat(2, 1fr)",
                // "backgroundColor":"black"
                "border":"1px solid red"
              }}
              key={ele.id}
            >
              <Projectpage
                id={ele.id}
                name={ele.full_name}
                language={ele.language}
                stargazers_count={ele.stargazers_count}
                watchers_count={ele.watchers_count}
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
















