import Image from "next/image";

export default function Home() {
  const a=12;
  return (
    <>

    <h1>UTFPR</h1>
    <h2> Francisco Beltrão</h2>
    <HomeConent/>
    </>

  );
}
  export function HomeConent(){
    return(
      <h1>Conteúdo</h1>
    )

  }

