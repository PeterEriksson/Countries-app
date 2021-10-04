import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Nav from "../components/Nav";
import Head from "next/head";
import { ArrowLeftIcon } from "@heroicons/react/outline";

function CountryDetail() {
  const router = useRouter();
  let countryId = router.query.countryId;

  const [allCountries, setAllCountries] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setAllCountries(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllCountries();
  }, [countryId]);

  let __country = allCountries?.find((item) => item.name.common === countryId);

  const handleNewCountryClick = (stringId) => {
    const getCountry = allCountries.find((item) => item.cca3 === stringId);
    /* console.log(getCountry.name); */
    router.replace(`/${getCountry.name.common}`);
  };

  /* Works BUT bugs when i go back and into a country */
  let arr = [];
  for (let i = 0; i < borderCountries?.length; i++) {
    allCountries.map((item) => {
      if (item.alpha3Code === borderCountries[i]) {
        return arr.push(item.name);
      }
    });
  }

  /* Utility funciton */
  /* https://www.codegrepper.com/code-examples/javascript/javascript+add+comma+to+large+numbers */
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  /* Utility funciton */
  function removeLastComma(str) {
    return str.replace(/,(\s+)?$/, "");
  }

  const displayLanguages = () => {
    let string = "";
    for (let i = 0; i < __languages?.length; i++) {
      string += __languages[i] + ", ";
    }
    string = removeLastComma(string);
    return <p className="text-gray-400">{string}</p>;
  };

  /* const languages = Object.keys(__country?.languages).map((key) => (
    <p key={key}>{__country?.languages[key]}</p>
  )); */

  console.log(__country);

  return (
    <div className="font-mainFont">
      <Head>
        <title>{countryId}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="px-5 flex flex-col  items-center h-screen overflow-y-auto pt-28 bg-mainDark text-white">
        <section className="flex flex-col w-full items-center">
          {/* BACK BUTTON */}
          {/* set div w-60 -> positions button at right place. */}

          <div className="w-60 mb-10 flex flex-col smallMediumBreakpoint:mr-80 ">
            <section
              onClick={() => router.push("/")}
              className="w-2/5  cursor-pointer space-x-2 text-gray-300 bg-mainDarkGrayish py-2 rounded-sm flex flex-row justify-center items-center"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <button>Back</button>
            </section>
          </div>

          {/* DIV FOR FLAG DOWN TO BORDER CTRIES */}
          <div className="flex flex-col smallMediumBreakpoint:flex-row">
            {/* Country Flag */}
            <LazyLoadImage
              src={__country?.flags.svg}
              effect=""
              className="rounded-md"
              height={400}
              width={250}
            />
            {/* Country Name */}
            {/* DIV FOR NAME DOWN TO BORDERS  */}
            <div className="flex flex-col smallMediumBreakpoint:ml-20">
              <div className="w-60">
                <h2 className="mt-5 mb-5 font-extrabold text-xl">
                  {__country?.name.common}
                </h2>
                {/* Official name */}
                <section className="flex flex-row py-1.5">
                  <p>Official name: </p>
                  <p className="text-gray-400"> {__country?.name.official}</p>
                </section>
                {/* Pupulation */}
                <section className="flex flex-row  py-1.5">
                  <p>Population: </p>
                  <p className="text-gray-400">
                    {/* {numberWithCommas(__country?.population)} */}
                    {numberWithCommas(__country?.population)}
                  </p>
                </section>
                {/* Region */}
                <section className="flex flex-row py-1.5">
                  <p>Region: </p>
                  <p className="text-gray-400">{__country?.region}</p>
                </section>
                {/* Sub Region */}
                <section className="flex flex-row  py-1.5">
                  <p>Sub Region: </p>
                  <p className="text-gray-400">{__country?.subregion}</p>
                </section>
                {/* Capital */}
                <section className="flex flex-row  py-1.5 mb-8">
                  <p>Capital: </p>
                  <p className="text-gray-400">{__country?.capital}</p>
                </section>

                {/* Top Level Domain + Currencies + Languages (new api weird >>> commented out) */}
                {/*  <section className="flex-row flex py-1.5">
              <p>Top Level Domain: </p>
              <p className="text-gray-400"></p>
            </section>
             
            <section className="flex flex-row py-1.5">
              <p>Currencies: </p>
              <p className="text-gray-400"></p>
            </section>
            
            <section className="flex flex-row py-1.5 mb-8">
              <p>Languages: </p>
            </section> */}

                {/* Border Coutnries-> */}
                <p className="py-1.5">Border Countries: </p>
                <div className="flex  w-72 overflow-x-auto flex-wrap mb-6">
                  {/* buttons for border countries */}
                  {__country?.borders?.map((item, i) => (
                    <div
                      onClick={() => handleNewCountryClick(item)}
                      key={i}
                      className="mr-3 mt-3 cursor-pointer flex w-14 border-2 border-borderColor flex-col justify-center items-center bg-mainDarkGrayish px-4 py-2"
                    >
                      <p className="font-extralight text-gray-400 text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CountryDetail;
