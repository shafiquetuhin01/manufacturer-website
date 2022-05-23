import React from "react";
import useTools from "../hooks/useTools";
import NewsItems from "./NewsItems";

const News = () => {
    const [newsItems] = useTools();
    return (
        <div className='py-8'>
            <h2 className='text-4xl text-center mb-8 text-primary font-bold'>Company News</h2>
            <div className='grid gap-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3'>
            {newsItems.slice(0,3).map(news=><NewsItems key={news._id} news={news}></NewsItems>)}
            </div>
            
        </div>
    );
};

export default News;
