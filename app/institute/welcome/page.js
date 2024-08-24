import React from "react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Monument from "@/app/components/Monument/Monument";

export default function page() {
  return (
    <>
   
   <div className="w-full flex h-[650px]  ">
        <div className="w-[850px] h-full flex flex-col justify-center items-center p-4 ">
          <h1 className="text-2xl font-semibold tracking-[10px]  text-[#FF3344] flex items-center text-[#FF3344] ">
            Professional Studies at -LNCPS INDORE
          </h1>
          <p className="text-black text-justify pt-2">
            {" "}
            NIT Rourkela is one of the institutes of national importance under
            Ministry of Education, Government of India. Government of India has
            elevated the Regional Engineering College, Rourkela to an autonomous
            institution under the name of National Institute of Technology,
            Rourkela.
          </p>
          </div>
          <div className="w-full  relative -z-10 ">
          {" "}
          <Image src="/mainImg.jpeg" alt="img" fill />
        </div>
        </div>
      <div
        className="w-full h-screen  "
        style={{ height: "calc(100vh - 60px)" }}
      >
        <div className="w-full flex px-5 py-5  gap-5">
          <div className="w-2/3 ">
            <div className="p-10">
              <h2 className=" tracking-[10px] text-lg text-[#FF3344]">WELCOME TO</h2>
              <h1 className="my-6 text-4xl  font-bold"> LNCPS INDORE</h1>

              <p className=" mt-2 font-extralight text-sm  text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore totam nesciunt illum, voluptatem obcaecati ut iure
                accusamus illo reiciendis, commodi quam? Veniam asperiores
                maiores distinctio consectetur, ratione eius, sunt voluptatum,
                voluptatem tempore ipsa iusto dignissimos voluptates eum
                commodi? Eius nobis odio doloribus ipsa, ducimus quos vitae
                mollitia. Recusandae, mollitia omnis? Quasi, amet numquam
                voluptatum culpa in voluptas cumque laborum atque iste qui quo
                harum quis, sed praesentium eius tempore? Perferendis beatae
                nostrum debitis ad, tempora iusto iure dicta provident illum
                doloremque aesentium iusto natus aut laudantium animi eligendi
                veritatis architecto suscipit? Expedita voluptates quae placeat,
                sed libero, recusandae sequi assumenda est impedit, suscipit aut
                quisquam animi fugit! Libero ducimus ipsa non, nemo laboriosam
                minima distinctio doloribus ratione
              </p>

              <p className=" mt-2 font-extralight text-sm text-justify">
                incidunt, excepturi deleniti fugit corrupti numquam at natus
                quidem assumenda sed fugiat quibusdam quis voluptate blanditiis?
                Consectetur iure ut, dolorum est magnam assumenda? Eum culpa,
                cum facere nesciunt, quia, fuga voluptatem facilis magnam
                quibusdam corporis ab pariatur voluptates. Ipsum iste mollitia
                repellendus. Omnis, alias. Quasi aliquid vitae at qui
                voluptatibus ea ipsum maxime adipisci doloribus quo, tenetur
                quisquam laborum officia labore harum accusantium neque quod cum
                modi quos, similique provident inventore perspiciatis quis?
                Ipsum enim quis cupiditate, sapiente ullam nam numquam atque
                voluptates itaque temporibus vel minus veniam recusandae
                laudantium laboriosam eaque id neque earum, quaerat nisi dolore
                ratione.
              </p>
            </div>
          </div>
          <div className="w-1/3  p-4">
            <div className="relative h-full">
              <Image
                src="/welcome.jpeg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto py-2 px-20">
        <Monument/>
      </div>
    </>
  );
}
