// import React from 'react';

const Feature1 = () => {
    return (
        <section className="p-5 lg:px-56 lg:pt-12 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row ">
                    <div className=" flex justify-center">
                    <img src="https://m.media-amazon.com/images/I/71gyqT4ednL._AC_UL640_QL65_.jpg" alt="" className="h-80 w-56 dark:bg-gray-500 aspect-video" />
                    </div>
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Top Selling Book</span>
                        <h3 className="text-3xl font-bold">Book that all want to know</h3>
                        <p className="my-6 dark:text-gray-400">Do you feel too sensitive for this world?<br/>
Are you at the mercy of your emotions, overwhelmed by your environment, and easily triggered by other people’s feelings?<br/>
You aren’t alone. Millions of Highly Sensitive People (HSP) feel exactly the same way.</p>
                        <button type="button" className="self-start bg-gray-500 text-white p-2 rounded-lg">Details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature1;