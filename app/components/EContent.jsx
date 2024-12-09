import Image from 'next/image'
import React from 'react'
import RuleCard from '../../app/components/RuleCard/RuleCard'
export default function EContent() {
  return (
    <>
      {/* <h1 className='text-4xl text-black font-semibold p-10'>E-Content</h1> */}
      <div className="w-full h-36 bg-cover capitalize flex justify-center items-center"
        style={{ backgroundImage: `url('/about-banner.jpg')` }}>
        <h2 className="font-bold text-3xl w-4/5 uppercase text-center text-white">
          E-CONTENT
        </h2>
      </div>
      <div className='bg-gray-200 p-4 rounded-lg mt-5'>
        <h1 className='text-3xl font-bold pl-10'>Your motivition & attention will teach you best</h1>
        <p className='text-xl  pl-10 mt-5'>Lakshmi Narain College of Proffesional Studies is
          fully equiped to
          create any
          form of E-content
          in order to keep up with the constant
          flow of Information and updates in
          todays networked world.</p>
      </div>  

      <h1 className='text-3xl font-bold pl-10'>Department Of Commerce And Management</h1>
      <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-10 pt-[36px]  grid grid-cols-3  gap-5 justify-evenly pb-10 ">
          <RuleCard
            bgcolor="bg-yellow-300"
            link="https://docs.google.com/presentation/d/12mtnI1C2ctlP38xeTx8Oq537juP3wTxW/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true"
            heading="Financial Accounting"
          />
          <RuleCard bgcolor="bg-green-200" link="https://docs.google.com/presentation/d/1BaU6-qMPvZZkRps6ReGVeN0xTZdkj_iw/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Public Finance" />
          <RuleCard bgcolor="bg-gray-200" link="https://drive.google.com/file/d/1uRe31Xk-Jq1EQ50prO0neE7kH8EURA_o/view?usp=sharing" heading="Business organization & Communication" />
          <RuleCard bgcolor="bg-blue-800" link="https://docs.google.com/presentation/d/1LlIV8KE2K6sHZNCDAgbJAdX55qlpSLLG/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Corporate Accounting" />
          <RuleCard bgcolor="bg-pink-200" link="https://docs.google.com/presentation/d/1eFdAIUbrqUCMTddtxChkFXX6VDRsB4pP/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Business Regulatory Framework" />
          <RuleCard bgcolor="bg-[#FFC5CA]" link="https://docs.google.com/presentation/d/195am-khblSrc8zZBYPPHagCP4QTI_JQw/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Banking and Insurance" />
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
          <div className="relative h-full ">
            <Image
              src="/lncpsbuild2.jpg"
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <h1 className='text-3xl font-bold pl-10 mt-5'>Department Of Bachelor Of Bussiness Administration</h1>
      <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-10 pt-[36px]  grid grid-cols-3  gap-5 justify-evenly pb-10 ">
          <RuleCard
            bgcolor="bg-yellow-300"
            link="https://docs.google.com/presentation/d/1tofuBtTZNZLOFOx-3_SAPyilPk0CcMr3/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true"
            heading="Communication Skill"
          />
          <RuleCard bgcolor="bg-green-200" link="https://docs.google.com/presentation/d/1CiCJ_Pegw9BrSOwrpQ8nkG1kf8jgJKcP/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Human Resource Management" />
          <RuleCard bgcolor="bg-gray-200" link="https://docs.google.com/presentation/d/16g83tslhWSHgM2gznFLJCkhiCuEvzNlF/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Bussiness Management" />
          <RuleCard bgcolor="bg-blue-200" link="https://docs.google.com/presentation/d/14WcrZcOvj_g2b1Zx9sbOa4ixdXB2ixgh/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Human Resource Development" />
          <RuleCard bgcolor="bg-pink-200" link="https://docs.google.com/presentation/d/1l9De-O2ZpaGr4PHfE6-d7u5J5gA95u64/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Marketing Research" />
          {/* <RuleCard bgcolor="bg-purple-300" link="https://docs.google.com/presentation/d/1tofuBtTZNZLOFOx-3_SAPyilPk0CcMr3/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Communication Skills" /> */}
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
          <div className="relative h-full ">
            <Image
              src="/lncpsbuild2.jpg"
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <h1 className='text-3xl font-bold pl-10 mt-5'>Other PPTs</h1>
      <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-10 pt-[36px]  grid grid-cols-3  gap-5 justify-evenly pb-10 ">
          <RuleCard
            bgcolor="bg-yellow-300"
            link="https://docs.google.com/document/d/163lonZ45Yvo7X3dwdJNN6AkBzuPtKHFs/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true"
            heading="Pharmaceutical Organic Chemistry"
          />
          <RuleCard bgcolor="bg-green-200" link="https://docs.google.com/presentation/d/12cUg3bb1PZ47Gygbk5z3mrC2gpHT2Jdp/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Programming Methodologies and Data Structure" />
          <RuleCard bgcolor="bg-gray-200" link="https://docs.google.com/presentation/d/1LB5_wvqp7c0-Z_3mGRtugyVN1ItSVrgz/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Hindi Sahitya" />
          <RuleCard bgcolor="bg-blue-200" link="https://docs.google.com/presentation/d/1nLzwrRcedZgxc3fXc6tYXQsESyM6MRiK/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Hindi Foundation" />
          {/* <RuleCard bgcolor="bg-pink-200" link="https://docs.google.com/presentation/d/1l9De-O2ZpaGr4PHfE6-d7u5J5gA95u64/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Marketing Research" /> */}
          {/* <RuleCard bgcolor="bg-purple-300" link="https://docs.google.com/presentation/d/1tofuBtTZNZLOFOx-3_SAPyilPk0CcMr3/edit?usp=sharing&ouid=105776555786097528502&rtpof=true&sd=true" heading="Communication Skills" /> */}
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
          <div className="relative h-full ">
            <Image
              src="/lncpsbuild2.jpg"
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>




      {/* <h1 className='text-3xl font-bold pl-10 mt-5'>IQAC And Others</h1>
      <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-10 pt-[36px]  grid grid-cols-3  gap-5 justify-evenly pb-10 ">
          <RuleCard
            bgcolor="bg-yellow-300"
            link="https://drive.google.com/file/d/18MapckiDFWLhtZuMhEj4d5Pcx5ReHUIw/view?usp=sharing"
            heading="Pahal 1"
          />
          <RuleCard bgcolor="bg-green-200" link="https://drive.google.com/file/d/1f2rMc8Tt1WJWCAgDJV6IjNleinyeSwlL/view" heading="Pahal 2 " />
          <RuleCard bgcolor="bg-gray-200" link="https://drive.google.com/file/d/1KNcGwpKq6B1dIrpO5x5ADGCnM3TaE3o8/view" heading="Pahal 3" />
          <RuleCard bgcolor="bg-blue-800" link="https://drive.google.com/file/d/1BABCug7-rijbPa5tS1u5l6pRPulWiDqE/view?usp=sharing" heading="Pahal 4" />
          <RuleCard bgcolor="bg-pink-200" link="https://drive.google.com/file/d/1TvZlbth4wsHYpvb_ONPTe4ztM7RdH-cf/view?usp=sharing" heading="Pahal 5" />
          <RuleCard bgcolor="bg-purple-300" link="https://drive.google.com/file/d/1roUsXEyLey_mWMfS4F3EzxzQLpPgRj5o/view?usp=sharing" heading="Pahal 6" />
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
          <div className="relative h-full ">
            <Image
              src="/welcome.jpeg"
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div> */}

    </>
  )
}