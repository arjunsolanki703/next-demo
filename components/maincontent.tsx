import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import LOGO from "../assets/images/Logo.png";
import MAIN_BG from "../assets/images/Group25.png";
import TWITTER from "../assets/images/twitter.png";
import INSTA from "../assets/images/instagram.png";
import SNAPCHAT from "../assets/images/snapchat.png";
import TIKTOK from "../assets/images/tiktok.png";
import WHATSAPP from "../assets/images/whatsapp.png";
import facebook from "../assets/images/facebook.png"
import linkedin from "../assets/images/linkedin.png"
import google from "../assets/images/google-plus.png"


import {
  CommonInput,
  CommonTextWithLine,
  CommonTextWithToggle,
  TextwithImageUpload,
  TextWithSocialIcons,
  TextArea,
  PhoneInput,
} from "./commonInput/commonInput";
import { getSupplierData } from "@/store/action";
import { Label } from "./Label";
import Image from "next/image";

export const Maincontent = () => {
  const [userData,setuserData] = useState({})
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhbG11d2FsbGFkQGdtYWlsLmNvbSIsInVzZXJJZCI6IjYzZDMyNWU4MDcwYzY4ODNmOGQzYjgwYyIsInN1cHBsaWVySWQiOiI2M2QzMjVlNzA3MGM2ODgzZjhkM2I4MDgiLCJyb2xlSWQiOiI2M2QyYzc5NWI2MmI5YzM2MzBkNGNmZTkiLCJpYXQiOjE2NzU1MTI4OTl9.0GCewzQdRFGl05dVVLQfrnxQQicyq6culVQ1BGzgzZQ";
  const supplierData = useSelector(
    (state: any) => state?.supplier?.supplierData
  );

  const dispatch = useDispatch();

  const Loader = () => {
    return (
      <>
        <h1>This is a loader. Data Loading from API</h1>
      </>
    );
  };

  const fetchSupplier = async () => {
    await axios({
      url: "https://apimenudev.talabatmenu.com/supplier/self",
      method: "get",
      responseType: "json",
      headers: {
        Authorization: "Bearer " + authToken,
      },
    })
      .then((response) => {
        setuserData(response.data.data)
        // setSupplierData(response.data.data)
        dispatch(getSupplierData(response.data.data));
        // console.log("get data from api", response.data.data);
      })
      .catch((error) => {
        console.log("error------error---------", error);
      });
  };

  useEffect(() => {
    fetchSupplier();
  }, []);

  const handleChange = (e:any) =>{
    const { name, value } = e.target;
    setuserData({...userData,[name]:value})

  }

  return (
    <>
      <div
        className="w-full bg-white flex flex-col p-5 justify-center rounded-xl"
        style={{ height: "60px" }}
      >
        <h2
          style={{ color: "#393230" }}
          className="font-bold text-2xl"
        >
          General Settings
        </h2>
      </div>

      <div className="rounded-xl p-[15px] bg-white my-5">
        <form
          action=""
          method="post"
          style={{ height: "65vh", overflowY: "scroll" }}
        >
          <div className="flex flex-wrap gap-5">
            <CommonInput
              placeHolder="Type Name In Arabic"
              labelName="Name In Arabic"
              value={userData?.nameAr}
              name="nameAr"
              onchange={(e:any)=>handleChange(e)}
            />
            <CommonInput
              labelName="Name In English"
              placeHolder="Type Name in English"
              value={userData?.name}
              name="name"
              onchange={(e:any)=>handleChange(e)}
            />
          </div>
          <div className="flex flex-wrap gap-5">
            <TextArea
              labelName="Simple Overview Of The Restaurant For Visitors Arabic"
              value={userData?.aboutAr}
              name="aboutAr"
              onchange={(e:any)=>handleChange(e)}
              placeHolder="Type simple overview in Arabic"
            />
            <TextArea
              labelName="Simple Overview Of The Restaurant For Visitors English"
              onchange={(e:any)=>handleChange(e)}
              value={userData?.about}
              name="about"
              placeHolder="Type simple overview in English"
            />
          </div>
          <div className="flex flex-wrap gap-5">
            <CommonInput
              labelName="VAT Number"
              placeHolder="Type VAT number"
              value={userData?.vatNumber}
              onchange={(e:any)=>handleChange(e)}
              name="vatNumber"
            />
            <CommonInput
              labelName="Email"
              placeHolder="Email"
              value={userData?.email}
              name="email"
              onchange={(e:any)=>handleChange(e)}

            />
          </div>
          <div className="2xl:w-2/5 xl:w-2/5 md:w-full sm:w-full">
            <PhoneInput
              placeHolder="PhoneInput"
              value={userData?.phoneNumber}
              labelName="Restaurant phone"
              name="phoneNumber"
              onchange={(e:any)=>handleChange(e)}
            />
          </div>
          <div className="flex">
            <CommonTextWithLine text="Tax & Reservation Setup" />
          </div>
          <div className="flex flex-wrap items-center my-4">
            <CommonTextWithToggle text="Tax Enabled" />
            <CommonTextWithToggle text="Tax Enabled On Reservation Fee" />
            <CommonTextWithToggle text="Tax Enabled On Table Fee" />
          </div>
          <div className="flex flex-wrap gap-5">
            <CommonInput
              labelName="Tax Rate (%)"
              placeHolder=""
              inputType="number"
              value={userData?.taxRate}
              name="taxRate"
              onchange={(e:any)=>handleChange(e)}
            />
            <CommonInput
              labelName="Reservation Fee"
              placeHolder=""
              inputType="number"
              value={userData?.reservationFee}
              name="reservationFee"
              onchange={(e:any)=>handleChange(e)}
            />
          </div>
          <div className="flex flex-wrap gap-5">
            <TextwithImageUpload text="Logo" src={userData?.logo} />

            <TextwithImageUpload
              text="Cover Image " 
              src={userData?.backgroundImage}
            />
          </div>
          <div style={{ display: "flex" }}>
            <CommonTextWithLine text="Social Accounts" />
          </div>

          <div className="flex flex-wrap gap-5 my-3">
            <TextWithSocialIcons
              text="Twitter"
              value={userData?.twitter}
              imageName={TWITTER}
            />
            <TextWithSocialIcons
              text="Instagram"
              value={userData?.instagram}
              imageName={INSTA}
            />
          </div>

          <div className="flex flex-wrap gap-5 my-3">
            <TextWithSocialIcons
              text="Snapchat"
              value={supplierData?.snapchat}
              imageName={SNAPCHAT}
            />
            <TextWithSocialIcons
              text="Tiktok"
              value={supplierData?.tiktok}
              imageName={TIKTOK}
            />
          </div>

          <div className="2xl:w-2/5 xl:w-2/5 md:w-full sm:w-full">                     
            <PhoneInput
              placeHolder="PhoneInput"
              value={userData?.whatsapp}
              labelName="Whatsapp"
              icon
              name="whatsapp"
              imageName={WHATSAPP}
              onchange={(e:any)=>handleChange(e)}
            />
          </div>

          <div style={{ display: "flex" }}>
            <Label title="Link To Your Main Page, You Can Add This Link To Your Instagram And Google Maps" />
          </div>

          <div className="flex">
            <p
              style={{
                color: "gray",
                fontSize: "15px",
                background: "#fff",
                paddingRight: "10px ",
              }}
              className="font-bold"
            >
              https://app.talabatmenu.com/restorant-name
            </p>
          </div>

          <div className="w-4/5 text-end">
            <button className=" bg-red-600 h-10 w-36 rounded-lg font-bold text-white">Save</button>
          </div>
        </form>
      </div>

      <div
        className="w-full bg-white flex p-5 justify-between rounded-xl"
        style={{ height: "60px" }}
      >
        <h2
          style={{ color: "#393230" }}
          className="text-sm"
        >
          Made by Talabat Menu @2023
        </h2>

        <div className="flex ">
          <span style={{padding:"0 5px"}}><Image height={20} width={20} src={facebook} alt="loading" /></span>
          <span style={{padding:"0 5px"}}><Image height={20} width={20} src={TWITTER} alt="loading" /></span>
          <span style={{padding:"0 5px"}}><Image height={20} width={20} src={linkedin} alt="loading" /></span>
          <span style={{padding:"0 5px"}} ><Image height={20} width={20} src={google} alt="loading" /></span>
        </div>
      </div>
    </>
  );
};
