import { useState } from "react";

import type { CarouselProps } from "../../interfaces/Interface";

const Carousel = ({repo, imgs}: CarouselProps) => {
    const [idx, setIdx] = useState(0);

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center">
                    <button onClick={() => setIdx(idx => idx - 1 < 0 ? imgs.length - 1 : idx - 1)} className="p-3 bg-blue-500 h-auto mx-4 font-extrabold text-white text-3xl rounded-xl hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                        </svg>
                    </button>
                    <a style={{ height: "60vh", width: "55vw" }} href={`${ repo }`} className="rounded-lg bg-blue-100 flex items-center justify-center">
                        <img
                            style={{ maxHeight: "60vh" }}
                            className="rounded-lg"
                            src={`/images/${ imgs[idx] }`}
                            alt=""
                        />
                    </a>
                    <button onClick={() => setIdx(idx => idx + 1 >= imgs.length ? 0 : idx + 1)} className="p-3 bg-blue-500 h-auto mx-4 font-extrabold text-white text-3xl rounded-xl hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                    </button>
                </div>
                <div className="flex mt-5 space-x-3">
                    {
                        imgs
                        .map((_, i) =>
                            <a key={i} onClick={() => setIdx(i)} className={`h-4 w-4 rounded-xl border-solid border-1 border-blue-500 ${i == idx ? "bg-blue-500" : ""} hover:cursor-pointer`}></a>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Carousel;
