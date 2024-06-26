import React from "react";
import facebook_icon from "../images/icon-facebook.svg";
import twitter_icon from "../images/icon-twitter.svg";
import instagram_icon from "../images/icon-instagram.svg";
import youtube_icon from "../images/icon-youtube.svg";
import arrow_up from "../images/icon-up.svg";
import arrow_down from '../images/icon-down.svg'
const Followers = () => {
  return (
    <>
      <section className="relative z-10 max-w-7xl mx-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-blue-600">
          <ul className="flex items-center justify-center text-center">
            <li>
              <img src={facebook_icon} alt="" className="mr-2" />
            </li>
            <li className=" text-slate-600 dark:text-slate-400 text-sm font-bold">@nathanf</li>
          </ul>
          <h2 className="text-slate-800 dark:text-white text-5xl font-bold text-center my-5">
            1987
            <span className="block  text-slate-600 dark:text-slate-400 font-normal uppercase text-sm tracking-widest">
              Followers
            </span>
          </h2>
          <p className="text-center text-emerald-600 flex items-center justify-center text-sm">
            <img src={arrow_up} alt="" className="mr-2 w-3" />
            12 Today
          </p>
        </article>
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-blue-500">
          <ul className="flex items-center justify-center text-center">
            <li>
              <img src={twitter_icon} alt="" className="mr-2" />
            </li>
            <li className=" text-slate-600 dark:text-slate-400 text-sm font-bold">@nathanf</li>
          </ul>
          <h2 className="text-slate-800 dark:text-white text-5xl font-bold text-center my-5">
            1044
            <span className="block  text-slate-600 dark:text-slate-400 font-normal uppercase text-sm tracking-widest">
              Followers
            </span>
          </h2>
          <p className="text-center text-emerald-600 flex items-center justify-center text-sm">
            <img src={arrow_up} alt="" className="mr-2 w-3" />
            99 Today
          </p>
        </article>
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 relative">
          <div className="instagram h-2 w-full rounded-tl-lg rounded-tr-lg absolute top-0 left-0"></div>
          <ul className="flex items-center justify-center text-center">
            <li>
              <img src={instagram_icon} alt="Instagram" className="mr-2" />
            </li>
            <li className="text-sm text-slate-600 dark:text-slate-400 font-bold">
              @realnathanf
            </li>
          </ul>

          <h2 className="text-5xl font-bold text-slate-800 dark:text-white text-center my-5">
            11k{" "}
            <span className="text-sm block text-slate-600 font-normal uppercase tracking-widest">
              Followers
            </span>
          </h2>

          <p className="text-center text-emerald-600 flex items-center justify-center text-sm font-bold">
            <img src={arrow_up} alt="" className="mr-2 w-3" />
            1099 today
          </p>
        </article>
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-red-700">
          <ul className="flex items-center justify-center text-center">
            <li>
              <img src={youtube_icon} alt="" className="mr-2" />
            </li>
            <li className=" text-slate-600 dark:text-slate-400 text-sm font-bold">Nathan F.</li>
          </ul>
          <h2 className="text-slate-800 dark:text-white text-5xl font-bold text-center my-5">
            8239
            <span className="block  text-slate-600 dark:text-slate-400 font-normal uppercase text-sm tracking-widest">
              
             Subscribers
            </span>
          </h2>
          <p className="text-center text-rose-600 flex items-center justify-center text-sm">
            <img src={arrow_down} alt="" className="mr-2 w-3" />
            144 Today
          </p>
        </article>
      </section>
    </>
  );
};

export default Followers;
