import { api } from "@/app/lib/middleware/apiInceptor";
import { NEWS, NOTICES } from "@/app/lib/services";
import React from "react";
import NoticeDetails from "../../Notice/NoticeDetails";

export default async function page({ params }) {
  const res = await api.get(`${NOTICES}/${params.id}`);
  console.log(res);
  const notice = res.data.payload;
  return (
    <div>
      <NoticeDetails
        image={notice.imageUrl}
        title={notice.title}
        content={notice.description}
      />
    </div>
  );
}
