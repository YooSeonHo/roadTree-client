
import { getOgData } from "@/src/api/detailRefPage/getDetailRefInfo";
import { ClassNames } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface ogData {
    ogData: {
        ogTitle?: string;
        ogImage: {
            url: string;
        }[]
        ogDescription?: string;
    }
}


export function UrlCard(props: { default_title: string, rid: string, url: string }) {

    const { default_title, rid, url } = props;

    const [ogInfo, setOgInfo] = useState<ogData | null>(null);

    useEffect(() => {
        try {
            const timeout = setTimeout(() => {
                setOgInfo({ ogData: { ogTitle: default_title, ogDescription: "", ogImage: [{ url: "/detailRef/default-image.jpg" }] } });
            }, 2000)

            const supaOgData = getOgData({ rid: props.rid }).then((data) => {
                if (data === null) {
                    fetch("/api/getog/" + props.rid).then((res) => res.json()).then((data) => {
                        clearTimeout(timeout);
                        if (data.ogData === undefined) {
                            data.ogData = {
                                ogTitle: default_title ?? "제목 없음",
                                ogDescription: "",
                                ogImage: [{ url: "/detailRef/default-image.jpg" }]
                            }
                        }
                        else if (data.ogData.ogImage === undefined) {
                            data.ogData.ogImage = [{ url: "/detailRef/default-image.jpg" }];
                        }
                        setOgInfo(data);
                    });
                } else {
                    clearTimeout(timeout);
                    if (data.ogData === undefined) {
                        data.ogData = {
                            ogTitle: default_title ?? "제목 없음",
                            ogDescription: "",
                            ogImage: [{ url: "/detailRef/default-image.jpg" }]
                        }
                    }
                    else if (data.ogData.ogImage === undefined) {
                        data.ogData.ogImage = [{ url: "/detailRef/default-image.jpg" }];
                    }
                    setOgInfo(data);
                    console.log(12321312);

                }
            });


        } catch (error) {

        }
    }, []);
    return (
        ogInfo === null ? <svg className="animate-spin h-5 w-5 mr-3 bg-main" viewBox="0 0 24 24"></svg> :
            <Link href={url ?? '#'} target="_blank">
                <div className="bg-slate-50 shadow-lg border">
                    <img
                        src={ogInfo?.ogData?.ogImage[0]?.url ?? "/detailRef/default-image.jpg"}
                        alt={url ? (ogInfo?.ogData?.ogTitle ?? "제목 없음") : "잘못된 url"}
                        className="w-64 h-36 object-center object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "/detailRef/default-image.jpg";
                        }}
                    />
                    <div className="px-4 pt-2 text-sm font-medium break-all w-64">{ogInfo?.ogData?.ogTitle ?? default_title}</div>
                    <div className="px-4 font-normal text-sm text-gray-500 break-all w-64 line-clamp-3 hover:line-clamp-none">{ogInfo?.ogData?.ogDescription}</div>
                    <div className="px-4 font-light text-xs text-gray-300 break-all w-64">{url}</div>
                </div>
            </Link >
    )


}