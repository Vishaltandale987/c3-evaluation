import React from "react";
import Head from "next/head";
import { Button } from "@chakra-ui/react";
import Projectpage from "../compount/Projectpage";

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
        <div style={{ "display":"flex"}}>
          <div>


        <img
          style={{ width: "300px", "border-radius": "200px" }}
          src={apidata.avatar_url}
          alt=""
          />

        <h1>{apidata.login}</h1>
        <p>{apidata.location}</p>

        <Button onclick={apidata.followers_url}>Resume</Button>
        <Button onclick={apidata.followers_url}>Follow</Button>
          </div>
          <div>

        <Projectpage/>
          </div>
          </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  let response = await fetch(`https://api.github.com/users/Vishaltandale987`);
  let data = await response.json();
  return {
    props: {
      apidata: data,
    },
  };
}

export default index;

// GET https://api.github.com/users/${Vishaltandale987}
// GET https://api.github.com/users/Vishaltandale987

// GET https://api.github.com/search/repositories?q=user:${Vishaltandale987}+fork:true&sort=updated&per_page=10&type=Repositories

// GET https://api.github.com/search/repositories?q=user/Vishaltandale987+fork:true&sort=updated&per_page=10&type=Repositories
