import { useState, SyntheticEvent } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function User() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  function handleInsertUser() {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
      }),
    })
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        alert("fail");
      });
  }

  function handleNameChange(e: SyntheticEvent) {
    let target = e.target as HTMLInputElement;
    setName(target.value);
  }

  function handleEmailChange(e: SyntheticEvent) {
    let target = e.target as HTMLInputElement;
    setEmail(target.value);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <input
          type="email"
          placeholder="Enter email"
          onChange={handleEmailChange}
        />
        <input
          type="name"
          placeholder="Enter full name"
          onChange={handleNameChange}
        />
        <button onClick={handleInsertUser}>Insert user</button>
      </main>
    </>
  );
}
